
import React from "react";
import "./style.scss";
import "./style428.scss";
import {useTranslation} from "react-i18next";
import scan from "../assets/product/scan.png";
import price from "../assets/product/price.png";
import doc from "../assets/product/doc.png";
import testnet from "../assets/product/net.png";
import arrowRight from "../assets/arrow-right.svg";

const Product = () => {
    const { t } = useTranslation();

    const title = t("About Product");
    const desc = t("About Product Desc");

    const list = [
        {
            img: price,
            title: t("Warehouse"),
            desc: t("Database"),
            link: "http://warehouseui.aresprotocol.io/",
        },
        {
            img: scan,
            title: t("AresScan"),
            desc: t("Areschain Explorer"),
            link: "https://aresscan.aresprotocol.io",
        },
        {
            img: doc,
            title: t("Wikipedia"),
            desc: t("Product Documents"),
            link: "https://docs.aresprotocol.io/en",
        },
        {
            img: testnet,
            title: t("Gladios"),
            desc: t("Testnet"),
            link: "https://js.aresprotocol.io/?rpc=wss%3A%2F%2Fgladios.aresprotocol.io#/explorer",
        },
    ];


    return (
        <section className="product" id='Product'>
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <ul className="warp">
                        {
                            list.map((item) => {
                                const { img, title, desc, link } = item;
                                return (
                                    <li
                                        key={item.title}
                                        className="item"
                                        onClick={() => window.open(link, "_blank")}
                                    >
                                        <div className="img-con">
                                            <img src={img} alt="" />
                                        </div>
                                        <div>
                                            <h2>{title}</h2>
                                            <p>{desc}</p>
                                            <a href={link} target="_blank" rel="noreferrer">
                                                <img src={arrowRight} alt="arrow" className="arrow"/>
                                            </a>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}


export default Product;