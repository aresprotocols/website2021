import {useTranslation} from "react-i18next";
import "./style.scss"
import React from "react";

const AresScan = () => {
    const { t } = useTranslation();
    const title = t("AresScan");
    const desc =
        t("A high-precision query tool based on Substrate, supporting querying all ARES on-chain transactions and on-chain data based on Ares Oracle.");


    return (
        <section className="scan">
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <ul className="warp">
                        <li className="item">
                            <div className="item-con">
                                18
                            </div>
                            <h2>Validator</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                18
                            </div>
                            <h2>Validator</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                18
                            </div>
                            <h2>Validator</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                18
                            </div>
                            <h2>Validator</h2>
                        </li>
                    </ul>
                    <div>
                        <div className="btn">AresScan</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AresScan;