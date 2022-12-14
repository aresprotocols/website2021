import React from "react";
import {useTranslation} from "react-i18next";
import "./style.scss";
import "./style428.scss";

import bnbs from "../assets/partners/bnbs.svg";
import coinhub  from "../assets/partners/coinhub.svg";
import crust from "../assets/partners/crust.png";
import gate from "../assets/partners/gate.png";
import keseffinance from "../assets/partners/keseffinance.png";
import kusama from "../assets/partners/kusama.jpeg";
import polkadot from "../assets/partners/polkadot.png";
import mxc from "../assets/partners/mxc.svg";
import pancake from "../assets/partners/pancake.svg";
import tpw from "../assets/partners/tpw.jpeg";


const Partners = () => {
    const { t } = useTranslation();
    const title = t("Our Partners");
    const desc =
        t("Ares Protocol team works with crypto industry partners.");

    const list = [
        {
            name: "Gate.io",
            img: gate,
        },
        {
            name: "Polkadot",
            img: polkadot,
        },
        {
            name: "Kusama",
            img: kusama,
        },{
            name: "MXC",
            img: mxc,
        },{
            name: "Crust Network",
            img: crust,
        },{
            name: "BNB CHAIN",
            img: bnbs,
        },{
            name: "PancakeSwap",
            img: pancake,
        },{
            name: "Token Pocket",
            img: tpw,
        },{
            name: "Coinhub",
            img: coinhub,
        },{
            name: "Kesef Finance",
            img: keseffinance,
        },
    ]



    return (
        <section className="partners">
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <div className="wrap">
                        {
                            list.map(item => {
                                return (
                                    <div className="item">
                                        <img src={item.img} alt="" width={52} height={52}/>
                                        <span>{item.name}</span>
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