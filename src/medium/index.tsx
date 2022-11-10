
import "./style.scss";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import AwesomeSwiper from "react-awesome-swiper";
import i18n from "i18next";

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


    const list = new Array(5).fill(1);

    const number = window.screen.width <= 1279 ? 1 : 3;
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
        if (swiperSliderIndex > number) {
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
                            <div className="swiper-slide warp">
                                {
                                    new Array(4).fill(1).map((index, item) => {
                                        return (
                                            <div className="item">Hello {item}</div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </AwesomeSwiper>
                    {/*<div className="team-swiper-button-prev" onClick={goPre}></div>*/}
                    <div className={`team-swiper-pre ${swiperSliderIndex === 0 ? "swiper-button-disable" : ""}`} onClick={goPre}/>
                    <div className={`team-swiper-next ${swiperSliderIndex > number ? "swiper-button-disable" : ""}`} onClick={goNext}/>
                    {/*<div className="swiper-button-next"></div>*/}
                </div>
            </div>
        </section>
    );
}

export default Medium;