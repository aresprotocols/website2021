import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import AwesomeSwiper from "react-awesome-swiper";
import i18n from "i18next";
import "./style.scss";
import "./style428.scss";
import w34Medium from "../assets/medium/w34-medium.webp";
import w33Medium from "../assets/medium/w33-medium.png";
import w32Medium from "../assets/medium/w32-medium.png";
import w31Medium from "../assets/medium/w31-medium.png";
import mainnet from "../assets/medium/mainnet.webp";

const Medium = () => {
    const { t } = useTranslation();
    let swiperRef: any = null;
    const [swiperSliderIndex, setSwiperSliderIndex] = useState(0);

    const title = t("Last Updates");
    const desc =
        t("Check the latest updates about our project on Medium");

    const swiperConfig = {
        // loop: true,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination-team",
            bulletElement: "li",
            hideOnClick: true,
            clickable: true,
        },
        on: {
            slideChange: function () {},
        },
    };


    const list = [
        {
            name: "Announcement｜Trojan&iliad staking APY, New Adjustment Coming on August 14th",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*WFfbUtLuyRQVBdtw",
            link: "https://aresprotocollab.medium.com/announcement-trojan-iliad-staking-apy-new-adjustment-coming-on-august-14th-ff788a37a068"
        },
        {
            name: "Weekly Update｜AI Oracle model developed to provide price prediction up and down",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*syManFjtrguEccib",
            link: "https://aresprotocollab.medium.com/weekly-update-ai-oracle-model-developed-to-provide-price-prediction-up-and-down-5afc8b19e6ec",
        },
        {
            name: "Reminder related to the mainnet Odyssey nominators dropped",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*zzqih-wAd8HI4w5s",
            link: "https://aresprotocollab.medium.com/reminder-related-to-the-mainnet-odyssey-nominators-dropped-def7aac5a6",
        },
        {
            name: "Weekly Update｜Plans to increase the diversity of ares-chain data sources",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qip3LTrgLkyN4wau3xFdKQ.png",
            link: "https://aresprotocollab.medium.com/weekly-update-plans-to-increase-the-diversity-of-ares-chain-data-sources-676878072f5f",
        },
        {
            name: "Price Prediction Operation Guide",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ezRfYKj2O49n0Sa8nBgMYQ.jpeg",
            link: "https://aresprotocollab.medium.com/price-prediction-operation-guide-807ebf2b8fcd",
        },
        {
            name: "Just join and Earn with your Price Prediction!",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2WtowwZETg1v5w2YBgWS0Q.jpeg",
            link: "https://aresprotocollab.medium.com/just-join-and-earn-with-your-price-prediction-ac24a7b47c60",
        },
        {
            name: "Weekly Update｜ares-oracle will combine with AI to launch a price prediction application model",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O01QEX5jevKRvdaQf_QrvQ.png",
            link: "https://aresprotocollab.medium.com/weekly-update-ares-oracle-will-combine-with-ai-to-launch-a-price-prediction-application-model-810966ec930a",
        },
        {
            name: "Announcement | Trojan&iliad finished upgrade, new adjustment will be on May 1",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*UAGD-fyhhVV3IQZ6",
            link: "https://aresprotocollab.medium.com/announcement-trojan-iliad-finished-upgrade-new-adjustment-will-be-on-may-1-267116b8c0dc",
        },
        {
            name: "Weekly Update｜Reward campaign ends successfully, rewards will be issued soon",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*ZYOvrn-r1HgP38K4",
            link: "https://aresprotocollab.medium.com/weekly-update-reward-campaign-ends-successfully-rewards-will-be-issued-soon-532d211fc2bd",
        },
        {
            name: "Announcement｜Price Alert function is officially open for public testing",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*XOA_h6ILE1d2p_Ur",
            link: "https://aresprotocollab.medium.com/announcement-price-alert-function-is-officially-open-for-public-testing-602517ef2d3c",
        },
        {
            name: "Weekly Update｜Price Alert feature enters internal testing",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*RYNewiTuS0ROMK4f",
            link: "https://aresprotocollab.medium.com/weekly-update-price-alert-feature-enters-internal-testing-70e2ef954bc6",
        },
        {
            name: "Adjustment of Trojan & iliad regular staking APY from April 11",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*09bpuUvELnvQ-iKq",
            link: "https://aresprotocollab.medium.com/adjustment-of-trojan-iliad-regular-staking-apy-from-april-11-1ce364da2ab8",
        },
        {
          name: "Weekly Update｜Ares Protocol update Odyssey to version 173",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*cRuFxjGicTqCd--p",
            link: "https://aresprotocollab.medium.com/weekly-update-ares-protocol-update-odyssey-to-version-173-2a6a0f4b5173",
        },
        {
            name: "Weekly Update｜Ares Protocol publishes roadmap to 2023",
            image: "https://miro.medium.com/max/1400/1*WZ-1YL-KGcyQokqLuOSCHw.webp",
            link: "https://aresprotocollab.medium.com/weekly-update-ares-protocol-publishes-roadmap-to-2023-8e9322f2ee5d",
        },
        {
            name: "Discontinuation of Trojan & iliad current staking",
            image: "https://miro.medium.com/max/1400/1*b5rscwdz6tT4C3I_xIENfQ.webp",
            link: "https://aresprotocollab.medium.com/discontinuation-of-trojan-iliad-current-staking-aa834efce45e",
        },
        {
            name: "Weekly Update｜Introduction of mainnet features added on the Ares Protocol website",
            image: "https://miro.medium.com/max/1400/1*TJZpLqYuJGLjhKMzvQCKyQ.webp",
            link: "https://aresprotocollab.medium.com/weekly-update-introduction-of-mainnet-features-added-on-the-ares-protocol-website-757bdc38122b",
        },
        {
            name: "Open invitation to all blockchain technology developers to join the “Ares Technology Community”!",
            image: "https://miro.medium.com/max/1400/1*k0aUv1v1DOiugIGEB5o7-w.webp",
            link: "https://aresprotocollab.medium.com/open-invitation-to-all-blockchain-technology-developers-to-join-the-ares-technology-community-ac339f1bc572"
        },
        {
            name: "“Qatar2022 Predictions” with Ares Protocol, Great Rewards",
            image: "https://miro.medium.com/max/1400/1*32G7betIEy9hko8Z9oRtmg.webp",
            link: "https://aresprotocollab.medium.com/qatar2022-predictions-with-ares-protocol-great-rewards-e3103e8423f5"
        },
        {
            name: "Weekly Update｜Ares Protocol adds price prediction and alert function development",
            image: w34Medium,
            link: "https://aresprotocollab.medium.com/weekly-update-ares-protocol-adds-price-prediction-and-alert-function-development-c3d7ffa2290e"
        },
        {
            name: "Weekly Report | Ares Protocol Reveals Mainnet Operation Data",
            image: w33Medium,
            link: "https://aresprotocollab.medium.com/weekly-report-ares-protocol-reveals-mainnet-operation-data-a9e649011a29"
        },
        {
            name: "Weekly Update｜Ares Protocol mainnet goes live successfully",
            image: w32Medium,
            link: "https://aresprotocollab.medium.com/weekly-update-ares-protocol-mainnet-goes-live-successfully-bbe6a079dede"
        },
        {
            name: "Ares Protocol will go live on the mainnet on October 3",
            image: mainnet,
            link: "https://aresprotocollab.medium.com/ares-protocol-will-go-live-on-the-mainnet-on-october-3-28c9265bff0d"
        },
        {
            name: "Weekly Update｜Chat&Win Event First Issue Winners Announced",
            image: w31Medium,
            link: "https://aresprotocollab.medium.com/weekly-update-chat-win-event-first-issue-winners-announced-183c3b377d37"
        },
    ];

    const number = window.screen.width <= 1279 ? 1 : 4;
    const slides = Math.ceil(list.length / number) as number;

    useEffect(() => {
        i18n.on('languageChanged', () => {
            setSwiperSliderIndex(0);
        })

    }, [])

    useEffect(() => {
        swiperRef.swiper.slideTo(swiperSliderIndex);
    }, [swiperSliderIndex])

    const goNext = () => {
        if (swiperSliderIndex > (list.length / number)) {
            return;
        }
        if (swiperRef) {
            setSwiperSliderIndex(swiperSliderIndex + 1);
        }
    }

    const goPre = () => {
        if (swiperSliderIndex === 0) {
            return;
        }
        if (swiperRef) {
            setSwiperSliderIndex(swiperSliderIndex - 1);
        }
    }

    return (
        <section className="medium">
            <div className="content">
                <h2 className="title" dangerouslySetInnerHTML={{__html:title}}></h2>
                <p className="desc">{desc}</p>
                <div className="con">
                    <AwesomeSwiper
                        //eslint-disable-next-line @typescript-eslint/no-unused-vars
                        ref={(ref) => (swiperRef = ref)}
                        config={swiperConfig}
                        className="team-swiper"
                    >
                        <div className="swiper-wrapper">
                            {
                                new Array(slides).fill(null).map((slide, index) => {
                                    const newList: any[] = [];
                                    list.forEach((t, sindex) => {
                                        if (!index && sindex < index * number + number) {
                                            newList.push(t);
                                        }
                                        if (
                                            index > 0 &&
                                            sindex < index * number + number &&
                                            sindex >= (index - 1) * number + number
                                        ) {
                                            newList.push(t);
                                        }
                                    });
                                    return (
                                        <div className="swiper-slide warp">
                                            {
                                                newList.map((item) => {
                                                    return (
                                                        <div className="item" onClick={() => window.open(item.link, "_blank")}>
                                                            <img src={item.image} alt={item.name}/>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </AwesomeSwiper>
                    {/*<div className="team-swiper-button-prev" onClick={goPre}></div>*/}
                    <div className={`team-swiper-pre ${swiperSliderIndex === 0 ? "swiper-button-disable" : ""}`} onClick={goPre}/>
                    <div className={`team-swiper-next ${swiperSliderIndex > number ? "swiper-button-disable" : ""}`} onClick={goNext}/>
                    {/*<div className="swiper-button-next"></div>*/}
                    <div className="swiper-pagination-team"></div>
                </div>
            </div>
        </section>
    );
}

export default Medium;