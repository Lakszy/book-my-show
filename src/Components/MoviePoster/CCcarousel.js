import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { NextArrow, PrevArrow } from "../Carousel/ArrowCompo";


function CarouselCastCrew(props) {

    const extraSetting = {
        margin: "-2rem 1.55rem",
    }

    const settingsSm = {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false
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
            <div className="flex flex-col md:w-4/5 w-full m-auto my-10 px-6">
                <div className="font-semibold text-3xl md:mx-0">{props.title}</div>
                <div className="md:hidden w-full">
                    <Slider {...settingsSm}>
                        {
                            props.arr.map((ig) => (
                                <div className="flex flex-col text-center text-xs">
                                    <img className="h-full w-full my-2 p-3 rounded-full" src={`https://image.tmdb.org/t/p/original${ig.profile_path}`} alt={ig.character} />
                                    <div className="font-medium">{ig.name} </div>
                                    <div className={`text-gray-600 ${props.isCaste ? "" : "hidden"}`}>as {ig.character} </div>
                                    <div className={`text-gray-600 ${props.isCaste ? "hidden" : ""}`}>{ig.job} </div>
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
                                    <img className="h-full w-full my-2 p-3 rounded-full" src={`https://image.tmdb.org/t/p/original${ig.profile_path}`} alt={ig.character} />
                                    <div className="font-medium">{ig.name} </div>
                                    <div className={`text-gray-600 ${props.isCaste ? "" : "hidden"}`}>as {ig.character} </div>
                                    <div className={`text-gray-600 ${props.isCaste ? "hidden" : ""}`}>{ig.job} </div>
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


function CCcarousel(props) {
    if (props.arr.length === 0) {
        return (<> </>);
    }
    return (
        <>
            <CarouselCastCrew arr={props.arr.cast} title={"Cast"} isCaste={true} />
            <CarouselCastCrew arr={props.arr.crew} title={"Crew"} />
        </>
    )

}
export default CCcarousel;