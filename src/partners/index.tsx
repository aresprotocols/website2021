import React from "react";
import {useTranslation} from "react-i18next";
import twitter from "../assets/twitter.png";
import "./style.scss";
import "./style428.scss";

const Partners = () => {
    const { t } = useTranslation();
    const title = t("Our Partners");
    const desc =
        t("The Ares Protocol Team combines knowledge, experience and" +
            "passion for cryptocurrencies. ");



    return (
        <section className="partners">
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <div className="wrap">
                        {
                            new Array(5).fill(1).map(item => {
                                return (
                                    <div className="item">
                                        <img src={twitter} alt=""/>
                                        <span>MXC</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;