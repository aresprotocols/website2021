import "./function.scss";
import "./function428.scss";

import func from "../assets/product/Funtion.png";
import {useTranslation} from "react-i18next";

const ProductFunction = () => {
    const { t } = useTranslation();

    return (
        <section className="function">
           <div className="content">
               <div className="desc">
                   <h2>{t("Product Function")}</h2>
                   <span className="info"></span>
                   <p className="desc-info">
                       {t("Product Function Desc")}
                   </p>
               </div>
               <div className="func-logo">
                   <img src={func} alt="ares product function" />
               </div>
           </div>
            <div className="contact">
                <p>
                    {t("Want to integrate our oracle products")} <span className="email">info@aresprotocol.io</span>
                </p>
                <span>
                    <div className="contactButton">
                        <a href="mailto:info@aresprotocol.io">{t("Contact Us")}</a>
                    </div>
                </span>
            </div>
        </section>
    );
}

export default ProductFunction