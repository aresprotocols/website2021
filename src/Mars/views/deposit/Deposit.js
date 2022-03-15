import { useTranslation } from "react-i18next";
import styles from "./Deposit.module.scss";
import JoinCrowdloanModal from "../../components/JoinCrowdloanModal";
import {useState} from "react";

const Deposit = props => {
	const { t } = useTranslation();

	const [showJoinCrowdloanModal, setShowJoinCrowdloanModal] = useState(false)

	const handleCloseJoinCrowdloanModal = () => {
		setShowJoinCrowdloanModal(false);
	}

	const handleJoinCrowdloan = event => {
		setShowJoinCrowdloanModal(true);
	};

	return (<section className={styles.depositLayout} id="deposit">
		<h2>{t("depositInterest")}</h2>
		<div className={styles.description}>{t("depositDescription")}</div>

		<div className={styles.content}>
			<div className={styles.card}>
				<h3>{t("commonRewards")}</h3>
				<div className={styles.ksm}>KSM≤50,000</div>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>1:1000</div>
				<div className={styles.info}>{t("rewardsDescription1")}</div>
				<div className={styles.line} />
			</div>

			<div className={styles.card}>
				<h3>{t("teamRewards")}</h3>
				<div className={styles.ksm}>KSM&gt;50,000</div>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>20% Bonus</div>
				<div className={styles.info}>{t("rewardsDescription2")}</div>
				<div className={styles.line} />
			</div>

			<div className={styles.card}>
				<h3>{t("invitationRewards")}</h3>
				<div className={styles.ksm}  onClick={handleJoinCrowdloan}
					 style={{background: "#F37B53", color: "#FFF", cursor: "pointer"}}>
					{t("joinCrowdloan")}
				</div>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>3% Bonus</div>
				<div className={styles.info}>{t("rewardsDescription3")}</div>
				<div className={styles.line} />
			</div>
		</div>

		{showJoinCrowdloanModal && (<JoinCrowdloanModal api={props.api} onClose={handleCloseJoinCrowdloanModal} />)}
	</section>);
};

export default Deposit;
