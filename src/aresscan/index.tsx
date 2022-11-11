import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import "./style.scss";
import "./style428.scss";

const AresScan = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<any>();
    const title = t("AresScan");
    const desc =
        t("A high-precision query tool based on Substrate, supporting querying all ARES on-chain transactions and on-chain data based on Ares Oracle.");

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        fetch("https://aresscan.aresprotocol.io/odyssey/api/v1/chain", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setData(data.data);
        })
    }

    const parseRewards = (rewards: any) => {
        const res = (parseInt(rewards) - (Math.pow(10, 9) * Math.pow(10, 12))) / Math.pow(10, 12);
        if (res > 1000000) {
            return (res / 1000000).toFixed(2) + "M";
        } else {
            return res.toFixed(2);
        }
    }

    return (
        <section className="scan">
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <ul className="warp">
                        <li className="item">
                            <div className="item-con">
                                { data ? data.total_validators : "-"}
                            </div>
                            <h2>Validator</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                { data ? data.total_extrinsics_signed : "-"}
                            </div>
                            <h2>Total Transfer</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                18
                            </div>
                            <h2>Data requests per block</h2>
                        </li>

                        <li className="item">
                            <div className="item-con">
                                {
                                    data ? parseRewards(data.total_issuance) : "-"
                                }
                            </div>
                            <h2>Total Rewards
                                Issued</h2>
                        </li>
                    </ul>
                    <div>
                        <div className="btn">
                            <a href="https://aresscan.aresprotocol.io/ares" target="_blank" rel="noreferrer">AresScan</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AresScan;