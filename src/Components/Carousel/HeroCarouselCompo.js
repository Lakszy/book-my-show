import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./ArrowCompo";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
    const image = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1653051239112_rrr_.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1651748319851_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1652777889242_supermoon.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1652866141572_sunburn.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1651492562825_restaurant.jpg",
    ];
    const settings = {
        arrow: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    const settingsSm = {
        fade: true,
        dots: true,
        centerPadding: '10px',
    };
    const settingsMd = {
        centerPadding: '150px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const settingsLg = {
        centerPadding: '250px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <div className="md:hidden lg:hidden">
                <Slider {...settingsSm} {...settings}>
                    {
                        image.map((ig) => (
                            <div className="h-80">
                                <img className="h-full w-full m-1 p-1 rounded-lg" src={ig} alt="IMG" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden md:block lg:hidden">
                <Slider {...settingsMd} {...settings}>
                    {
                        image.map((ig) => (
                            <div className="h-80">
                                <img className="h-full w-full m-1 p-1 rounded-lg" src={ig} alt="IMG" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLg} {...settings}>
                    {
                        image.map((ig) => (
                            <div className="h-96">
                                <img className="h-full w-full m-2 p-2 rounded-xl" src={ig} alt="IMG" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}
export default HeroCarousel;