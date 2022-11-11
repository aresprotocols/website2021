import {useTranslation} from "react-i18next";
import whouse from "../assets/product/warehouse.png";
import "./style.scss";
import "./style428.scss";

const Warehouse = () => {

    const { t } = useTranslation();
    const title = t("Warehouse");
    const desc =
        t("Ares standard database with trading price weights configurable service.");


    return (
        <section className="warehouse" id='Product'>
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <div className="warehouse-desc">
                        <div className="pair">
                            <div className="num">77+</div>
                            <span>Cryptocurrency</span>
                        </div>
                        <div>
                            <ul>
                                <li>Get transaction prices</li>
                                <li>Get prices after aggregation</li>
                                <li>Get all prices by token</li>
                                <li>Get token history price</li>
                                <li>Get token request information</li>
                                <li>Get updated price history</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <a href="http://warehouseui.aresprotocol.io/" target="_blank" rel="noreferrer" >Warehouse</a>
                        </div>
                    </div>
                    <div>
                        <img src={whouse} alt="ares warehouse"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Warehouse;