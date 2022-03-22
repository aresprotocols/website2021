import { unmountComponentAtNode } from "react-dom";
import { useTranslation } from "react-i18next";
import styles from "./TelegramList.module.scss"

const TelegramItem = props => {
	const { t } = useTranslation();

	return (<div className={styles.telegramItemLayout}>
		<img src={props.icon}  alt="telegram"/>
		<a href={props.url} target="_blank" rel="noreferrer">
			<div className={styles.label}>{props.label}&nbsp;{t("community")}</div>
		</a>
	</div>);
}

const TelegramList = props => {
	const { t } = useTranslation();

	const handleCancel = event => {
		unmountComponentAtNode(document.getElementById("mainModalContainer"));
	}

	return (<div className={styles.telegramListLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{t("communitiesByCountry")}</h3>

				<div className={styles.description}>{t("communitiesByCountryDescription")}</div>

				<div className={styles.content}>
					<TelegramItem icon="/images/0000-35.png" label={t("official")} url="https://t.me/AresProtocolLab" />
					<TelegramItem icon="/images/CN.png" label={t("china")} url="http://t.me/AresProtocolChina" />
					<TelegramItem icon="/images/ES.png" label={t("spanish")} url="https://t.me/aresprotocol_spanish" />
					<TelegramItem icon="/images/PORTUGUESE.png" label={t("portuguese")} url="https://t.me/AresProtocol_PortugueseCommunity" />

					<TelegramItem icon="/images/UK.png" label={t("ukraine")} url="https://t.me/AresProtocol_UkrainianCommunity" />
					<TelegramItem icon="/images/Arabic.png" label={t("Arabic")} url="https://t.me/AresProtocolArabic_Community" />

					<TelegramItem icon="/images/KO.png" label={t("korea")} url="https://t.me/AresProtocol_KoreanGroup" />
					<TelegramItem icon="/images/JP.png" label={t("japan")} url="https://t.me/AresProtocol_JapaneseCommunity" />
					<TelegramItem icon="/images/Turkey-44.png" label={t("turkey")} url="https://t.me/AresProtocol_TurkishCommunity" />
					<TelegramItem icon="/images/RU-36.png" label={t("russia")} url="https://t.me/AresProtocol_RussianCommunity" />

					<TelegramItem icon="/images/India-41.png" label={t("india")} url="https://t.me/AresProtocol_HindiCommunity" />
					<TelegramItem icon="/images/FR-44.png" label={t("france")} url="https://t.me/AresProtocolFrenchCommunity" />
				</div>
			</div>
		</div>
	</div>);
};

export default TelegramList;
