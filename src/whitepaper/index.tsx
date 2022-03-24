
import "./style.scss"
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const Whitepaper = () => {
    const { t,i18n } = useTranslation();
    const params = useParams();


    useEffect(() => {
        i18n.changeLanguage(params.lang);
        // eslint-disable-next-line
        if (params.lang === "ar") {
            document.documentElement.setAttribute("dir", "rtl");
        }
    }, []);

    return (
        <div className='wrapper'>
            <div className="wnav">
                <div className="navList">
                    <a href="#introduction">{t("Introduction")}</a>
                    <a href="#technical">{t("Technical Architecture")}</a>
                    <a href="#market">{t("Data Market")}</a>
                    <a href="#economic">{t("Economic Model")}</a>
                </div>
            </div>
            <div className="content">
                <div className="title" id="introduction">{t("Introduction")}</div>
                <div className="bold">{t("Background")}</div>
                <div>
                    <p className="segment">{t("Background Info P1")}</p>
                    <p className="segment">{t("Background Info P2")}</p>
                </div>

                <section id="plan">
                    <div className="bold">{t("Existing Plan")}</div>
                    <div>
                        <p className="segment">{t("Existing Plan P1")}</p>
                        <p className="segment">{t("Existing Plan P2")}</p>
                    </div>
                </section>

                <section id="ares-protocol">
                    <div className="bold">{t("Ares Protocol Introduction")}</div>
                    <div>
                        <p className="segment">{t("Ares Protocol Introduction P1")}</p>
                        <p className="segment">{t("Ares Protocol Introduction P2")}</p>
                        <p className="segment">{t("Ares Protocol Introduction P3")}</p>
                    </div>
                </section>

                <section id="technical">
                    <div className="title">{t("Technical Architecture")}</div>
                    <div className="subtitle">{t("How Ares Works")}</div>
                    <div>
                        <img src="/images/white-paper/architec.jpeg" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Participants")}</div>
                    <div>
                        <img src="/images/white-paper/arch.png" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Aggregator")}</div>
                    <div>
                        <p className="segment">{t("Aggregator Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Challenger")}</div>
                    <div>
                        <p className="segment">{t("Challenger Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Reputation Committee")}</div>
                    <div>
                        <p className="segment">{t("Reputation Committee Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Data consumer")}</div>
                    <div>
                        <p className="segment">{t("Data consumer Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Node operator")}</div>
                    <div>
                        <p className="segment">{t("Node operator Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Detailed design")}</div>
                    <div>
                        <img src="/images/white-paper/design.png" alt="" width="760"/>
                        <p className="segment">{t("Detailed design Info P1")}</p>
                        <p className="segment">{t("Detailed design Info P2")}</p>
                        <p className="segment">{t("Detailed design Info P3")}</p>
                        <p className="segment">{t("Detailed design Info P4")}</p>
                        <p className="segment">{t("Detailed design Info P5")}</p>
                        <p className="segment">{t("Detailed design Info P6")}</p>
                        <p className="segment">{t("Detailed design Info P7")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("How to solve decentralization?")}</div>
                    <div>
                        <p className="segment">{t("How to solve decentralization Info")}</p>
                    </div>
                </section>


                <section>
                    <div className="bold">{t("Distributed data source")}</div>
                    <div>
                        <p className="segment">{t("Distributed data source Info P1")}</p>
                        <p className="segment">{t("Distributed data source Info P2")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Distributed aggregator")}</div>
                    <div>
                        <p className="segment">{t("Distributed aggregator Info P1")}</p>
                        <p className="segment">{t("Distributed aggregator Info P2")}</p>
                        <p className="segment">{t("Distributed aggregator Info P3")}</p>
                        <img src="/images/white-paper/vrf.png" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Reputation committee governance")}</div>
                    <div>
                        <p className="segment">{t("Reputation committee governance Info P1")}</p>
                        <p className="segment">{t("Reputation committee governance Info P2")}</p>
                        <img src="/images/white-paper/bft.png" alt="" width="760"/>
                        <p className="segment">{t("Reputation committee governance Info P3")}</p>
                        <p className="segment">{t("Reputation committee governance Info P4")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("How to resolve disputes?")}</div>
                    <div>
                        <img src="/images/white-paper/disputes.png" alt="" width="760"/>
                        <p className="segment">{t("How to resolve disputes Info P1")}</p>
                        <p className="segment">{t("How to resolve disputes Info P2")}</p>
                        <p className="segment">{t("How to resolve disputes Info P3")}</p>
                    </div>
                </section>

                <section id="market">
                    <div className="title">{t("Data Market")}</div>
                    <div>
                        <img src="/images/white-paper/dataMarket.jpeg" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Decentralized Finance")}</div>
                    <div>
                        <p className="segment">{t("Decentralized Finance Info")}</p>
                    </div>
                </section>


                <section>
                    <div className="bold">{t("Decentralized Identity")}</div>
                    <div>
                        <p className="segment">{t("Decentralized Identity Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("IoT")}</div>
                    <div>
                        <p className="segment">{t("IoT Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Prediction Market")}</div>
                    <div>
                        <p className="segment">{t("Prediction Market Info")}</p>
                    </div>
                </section>


                <section>
                    <div className="bold">{t("Betting Games")}</div>
                    <div>
                        <p className="segment">{t("Betting Games Info P1")}</p>
                        <p className="segment">{t("Betting Games Info P2")}</p>
                    </div>
                </section>

                <section id="economic">
                    <div className="title">{t("Economic Model")}</div>
                    <div>
                        <img src="/images/white-paper/economic.jpeg" alt="" width="760"/>
                        <p className="segment">{t("Economic Model Info")}</p>
                        <img src="/images/white-paper/economic-p1.png" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Node Mortgage")}</div>
                    <div>
                        <p className="segment">{t("Node Mortgage Info")}</p>
                        <img src="/images/white-paper/economic-p2.png" alt="" width="760"/>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Transaction Fee")}</div>
                    <div>
                        <p className="segment">{t("Transaction Fee Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Arbitration")}</div>
                    <div>
                        <p className="segment">{t("Arbitration Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Treasury")}</div>
                    <div>
                        <p className="segment">{t("Treasury Info")}</p>
                    </div>
                </section>

                <section>
                    <div className="bold">{t("Community Governance")}</div>
                    <div>
                        <p className="segment">{t("Community Governance Info")}</p>
                    </div>
                </section>

            </div>
        </div>
    );
}


export default Whitepaper;
