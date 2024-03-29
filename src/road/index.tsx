import React from "react";
import "./style.scss";
import "./style1280.scss";
import { useTranslation } from "react-i18next";
import roadIcon from "../assets/road.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: ""}}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "" }}
          onClick={onClick}
      />
  );
}




function Road() {
  let swiperRef = null;
  const { t } = useTranslation();
  const title = t("Road Map");
  const desc = t(
    "All you need is the plan, the road map, and the courage to press on to your destination."
  );
  const data = [
    {
      year: "2020",
      envy: "Q4",
      text: [
        t("Issue White Paper 1.0"),
        t("Core protocol design"),
        t("Apply for Web3 fund grant"),
        t("Develop prototype based on pallet and off-chain work"),
      ],
    },
    {
      year: "2021",
      envy: "Q1",
      text: [
        t("Improve the economic model"),
        t("Integrate Ares Protocol in Polkadot Defi projects"),
        t("Obtain Web3 fund grant"),
      ],
    },
    {
      year: "2021",
      envy: "Q2",
      text: [
        t("Publish Technology Yellow Paper"),
        t("Develop testnet"),
        t("Listing on the secondary market"),
      ],
    },
    {
      year: "2021",
      envy: "Q3",
      text: [
        t("Strengthen the cross-chain interaction of the oracle users"),
        t("Improve challenger and Arbitration counsel model"),
        t(
            "Improve economic model design"
        ),
      ],
    },
    {
      year: "2021",
      envy: "Q4",
      text: [
        t("Implement random selection of aggregators and on-chain aggregation"),
        t("Launch testnet"),
        t("Access to the eco-partner testing"),
      ],
    },
    {
      year: "2022",
      envy: "Q1",
      text: [
        t("Launch AresScan blockchain browser with trade history searching function."),
        t("Launch price prediction module in Gladios test testnet"),
        t("Acquire on-chain and off-chain data on Ares Protocol price quotation program"),
        t("Open up asset bridge between BSC & ETH network"),
        t("Publish updated official Wikipedia"),
      ],
    },
    {
      year: "2022",
      envy: "Q2",
      text: [
        t("Operate multi-channelled cooperation"),
        t("Enhance cross-company companionship"),
        t("Operate Eco-marathon developer activities"),
        t("Issue chain verified, VRF algorithm based game The Trojan Box"),
      ],
    },
    {
      year: "2022",
      envy: "Q3",
      text: [
        t("Go live on Odyssey mainnet prep network"),
        t("mapping of ARES-ERC20 assets into Odyssey"),
        t("Main network official operation"),
      ],
    },
    {
      year: "2022",
      envy: "Q4",
      text: [
        t("Mainnet runs Price Prediction Function"),
        t("Mainnet optimizes Quote Verification Function"),
        t("Opening of Ares Technical Community"),
      ],
    },
    {
      year: "2023",
      envy: "Q1",
      text: [
        t("Mainnet runs Price Alert Function"),
        t("Polkadot/Kusama ParaChain technical readiness"),
      ],
    },
    {
      year: "2023",
      envy: "Q2",
      text: [
        t("Promote use cases to get applications running on Mainnet"),
        t("Polkadot/Kusama ParaChain technical readiness"),
      ],
    },
    {
      year: "2023",
      envy: "Q3",
      text: [
        t("Mainnet turns on Ares governance"),
        t("Mainnet is upgrade on-chain to access Polkadot’s heterogeneous parachains"),
      ],
    },
    {
      year: "2023",
      envy: "Q4",
      text: [
        t("Optimist challenge mode enabled on the mainnet"),
        t("Implement Polkadot XCMP-based cross-chain oracle solution"),
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (document.body.clientWidth <= 2150 && document.body.clientWidth > 750) {
    return (
        <section className="road m">
          <div className="road-con">
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
            <div className="wraps">
              <Slider {...settings}>
                <div className="swiper-slide" style={{width: "400px"}}>
                  <ul className="swiperItemWrapper item1">
                    {data.slice(0, 4).map((item, index) => {
                      const { year, envy, text } = item;
                      return (
                          <li className="wrapItem" key={index}>
                            <h2 className="wrap-road-title">
                              {year}
                              <span>{envy}</span>
                            </h2>
                            <p className="wrap-road-info">
                              <img src={roadIcon} alt="" />
                            </p>
                            <div className="wrap-road-text">
                              {text.map((t, index) => (
                                  <p key={index}>{t}</p>
                              ))}
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="swiper-slide">
                  <ul className="swiperItemWrapper item1">
                    {data.slice(4, 8).map((item, index) => {
                      const { year, envy, text } = item;
                      return (
                          <li className="wrapItem" key={index}>
                            <h2 className="wrap-road-title">
                              {year}
                              <span>{envy}</span>
                            </h2>
                            <p className="wrap-road-info">
                              <img src={roadIcon} alt="" />
                            </p>
                            <div className="wrap-road-text">
                              {text.map((t, index) => (
                                  <p key={index}>{t}</p>
                              ))}
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="swiper-slide">
                  <ul className="swiperItemWrapper item1">
                    {data.slice(8, 12).map((item, index) => {
                      const { year, envy, text } = item;
                      return (
                          <li className="wrapItem" key={index}>
                            <h2 className="wrap-road-title">
                              {year}
                              <span>{envy}</span>
                            </h2>
                            <p className="wrap-road-info">
                              <img src={roadIcon} alt="" />
                            </p>
                            <div className="wrap-road-text">
                              {text.map((t, index) => (
                                  <p key={index}>{t}</p>
                              ))}
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="swiper-slide">
                  <ul className="swiperItemWrapper item2">
                    {data.slice(12, 16).map((item, index) => {
                      const { year, envy, text } = item;
                      return (
                          <li className="wrapItem" key={index}>
                            <h2 className="wrap-road-title">
                              {year}
                              <span>{envy}</span>
                            </h2>
                            <p className="wrap-road-info">
                              <img src={roadIcon} alt="" />
                            </p>
                            <div className="wrap-road-text">
                              {text.map((t, index) => (
                                  <p key={index}>{t}</p>
                              ))}
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
              </Slider>
            </div>
          </div>
        </section>
    );
  }


  if (document.body.clientWidth <= 750) {
    return (
        <section className="road m phone">
          <div className="road-con">
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
            <div className="warp">
              <div className="team-con">
                <Slider {...settings}
                    className="team-swiper swiper-container"
                >
                    {data.map((item, index) => {
                      const { year, envy, text } = item;
                      return (
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="item" key={index}>
                                <h2 className="road-title">
                                  {year}
                                  <span>{envy}</span>
                                </h2>
                                <p className="road-info">
                                  <img src={roadIcon} alt="" />
                                </p>
                                <div className="road-text">
                                  {text.map((t, index) => (
                                    <p key={index}>{t}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
    );
  }


  return (
    <section className="road">
      <div className="road-con">
        <div className="road-con-header">
          <h2 className="title">{title}</h2>
        </div>
        <p className="desc">{desc}</p>
        <ul className="warp">
          {data.map((item, index) => {
            const { year, envy, text } = item;
            return (
              <li className="item" key={index}>
                <h2 className="road-title">
                  {year}
                  <span>{envy}</span>
                </h2>
                <p className="road-info">
                  <img src={roadIcon} alt="" />
                </p>
                <div className="road-text">
                  {text.map((t, index) => (
                    <p key={index}>{t}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Road;
