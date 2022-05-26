import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Carousel/ArrowCompo";
// import { NextArrow, PrevArrow } from "../Config/EcardArrowCompo";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function CCcarousel(props) {
    const extraSetting = {
        margin: "-3rems 1.55rem",
    }
    const settingsSm = {
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    const settingMdLg = {
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <NextArrow extra={extraSetting} />,
        prevArrow: <PrevArrow extra={extraSetting} />
    };
    const extra = [];
    for (let int = 0; int < 5 - props.arr.length; int++) {
        extra.push(1);
    }
    return (
        <>

            <div className="flex flex-col md:w-4/5 w-full m-auto my-10">
                <div className="font-semibold text-3xl mx-10 md:mx-0">{props.title}</div>
                <div className="md:hidden w-full mx-10">
                    <Slider {...settingsSm}>
                        {
                            props.arr.map((ig) => (
                                <div className="flex flex-col text-center">
                                    <img className="h-full w-full my-2 p-3 rounded-full" src={ig.src} alt="IMG.jpg" />
                                    <div className="font-medium">{ig.name} </div>
                                    <div className=" text-gray-600">{ig.role} </div>
                                </div>
                            ))
                        }
                        {
                            extra.map((ig) => (
                                <div className="bg-white">
                                </div>
                            ))
                        }
                    </Slider>
                    <hr className="mt-10" />
                </div>
                <div className="hidden md:block w-full md:w-4/5 lg:w-3/5">
                    <Slider {...settingMdLg}>
                        {
                            props.arr.map((ig) => (
                                <div className="flex flex-col text-center">
                                    <img className="h-full w-full my-2 p-3 rounded-full" src={ig.src} alt="IMG.jpg" />
                                    <div className="font-medium">{ig.name} </div>
                                    <div className=" text-gray-600">{ig.role} </div>
                                </div>
                            ))
                        }
                        {
                            extra.map((ig) => (
                                <div className="bg-white">
                                </div>
                            ))
                        }
                    </Slider>
                    <hr className="mt-10" />
                </div>
            </div>
        </>
    );
}
export default CCcarousel;