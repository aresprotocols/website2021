import { web3Accounts, web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import BigNumber from "bignumber.js";
import { useState } from "react";
import { render } from "react-dom";
import { useTranslation } from "react-i18next";
import Alert from "./Alert";
import styles from "./JoinCrowdloanModal.module.scss";
import Config from "../../Config";

let theInput = null;

const JoinCrowdloanModal = props => {
	const api = props.api;
	const isConnected = Boolean(api);
	const { t } = useTranslation();
	const [accounts, setAccounts] = useState([]);
	const [account, setAccount] = useState(null);
	const [balance, setBalance] = useState(null);
	const [inputValue, setInputValue] = useState(new BigNumber(0));
	const [email, setEmail] = useState("");
	const [invitationAddress, setInvitationAddress] = useState("-");

	const handleConnect = async event => {
		await web3Enable("mars");
		const accounts = await web3Accounts({ ss58Format: 2 });
		setAccounts(accounts)
		setAccount(accounts[0].address);

		const { data: balance } = await api.query.system.account(accounts[0].address);
		setBalance(balance.free)
	}

	const handleChange = event => {
		setAccount(event.target.value);
	}

	const handleCancel = event => {
		// unmountComponentAtNode(document.getElementById("mainModalContainer"));
		props.onClose();
	}

	const handleSubmit = async event => {
		const SENDER = account;
		const injector = await web3FromAddress(SENDER)
		api.tx.crowdloan.contribute(2008, inputValue.toFixed(), null)
			.signAndSend(SENDER, { signer: injector.signer }, ({ status, dispatchError }) => {
				if (dispatchError) {
					if (dispatchError.isModule) {
						// for module errors, we have the section indexed, lookup
						const decoded = api.registry.findMetaError(dispatchError.asModule);
						const { docs, name, section } = decoded;

						console.log(`${section}.${name}: ${docs.join(' ')}`);
					}
					console.log(`${dispatchError}`);
				}

				if (status.isInBlock) {
					// unmountComponentAtNode(document.getElementById("mainModalContainer"));
					saveContribution(status.asInBlock,  inputValue.toFixed());
					props.onClose();
					render(<Alert title={t("thanksForSupport")} content={t("thanksForSupportContent")} />, document.getElementById("mainModalContainer"));
				}
			}).catch((error: any) => {
				console.error(error);
			});
	}

	const handleMax = event => {
		const value = new BigNumber(balance);
		setInputValue(value);
		if (theInput) {
			theInput.value = value.shiftedBy(-12).toNumber();
		}
	}

	const handleInput = event => {
		setInputValue(new BigNumber(event.target.value).shiftedBy(12));
	}

	const saveContribution = async (block_num, val) => {
		const data = {
			found_id: "0",
			para_id: "0",
			who: account,
			contributed: val,
			contributing: val,
			block_num: block_num,
			extrinsic_index: "0",
			status: "1",
			email: email,
			invitation_address: invitationAddress
		}
		const result = await (await fetch(Config.baseMailAPI + Config.saveContribution, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})).json();
	}

	const handleEmailInput = e => {
		setEmail(e.target.value);
	}

	const handleInvitationInput = e => {
		const val = e.target.value === "" ? "-" : e.target.value;
		setInvitationAddress(val);
	}



	// const init = async () => {
	// 	const provider = new WsProvider("wss://kusama-rpc.polkadot.io");
	// 	api = await ApiPromise.create({ provider });
	// 	setIsConnected(true);
	// };

	// useEffect(() => {
	// 	init();
	// }, []);

	return (<div className={styles.joinCrowdloanModalLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{t("contributeNow")}</h3>

				{/* <div className={styles.lightButton}>{account.address.substr(0, 10) + "..."}</div> */}
				<div className={styles.content} >
					{account ? (<select
						onChange={handleChange}
						className={styles.lightButton}>
						{accounts.map(item => (<option key={item.address} value={item.address}>{item.meta.name}</option>))}
					</select>) : (isConnected ? (<button
						className={styles.lightButton}
						disabled={!isConnected}
						onClick={handleConnect}>{t("connectPolkadotExtension")}</button>) : (<div className={styles.lightButton}>Loading Polkadot.js...</div>))}

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("ksmTOContribute")}</div>

						<div style={{
							width: "100%",
							position: "relative"
						}}>
							<input type="number"
								ref={node => theInput = node}
								onChange={handleInput}
							/>

							<button
								className={styles.maxButton}
								disabled={!balance}
								onClick={handleMax}>{t("max")}</button>
						</div>
					</div>

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("estimatedAMASRewards")}</div>
						<div className={styles.monitor}>{inputValue.shiftedBy(-12).multipliedBy(1000).toFixed()}</div>
					</div>

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("email")}</div>
						<input onChange={handleEmailInput}/>
					</div>

					<div style={{ width: "100%" }}>
						<div className={styles.label}>
							{t("InvitationAddress")}&nbsp;
							<span style={{color: "#E56239", fontSize: "14px"}}>*optional</span>
						</div>
						<input onChange={handleInvitationInput} />
					</div>

					<div className={styles.buttons}>
						<button
							className={styles.darkButton}
							disabled={inputValue.eq(0)}
							onClick={handleSubmit}>{t("submit")}</button>

						<button className={styles.darkButton} onClick={handleCancel}>{t("cancel")}</button>
					</div>
				</div>
			</div>

			<img className={styles.illustrationModal} src="/images/mars/modal.png" alt="illustration" />
		</div>

	</div >);
};

export default JoinCrowdloanModal;
