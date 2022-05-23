import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./EcardArrowCompo";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Ecard() {
    const image = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTEwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202011150107.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/self-improvement-collection-202007220710.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/food-n-drinks-collection-202010061250.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202012041129.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/art-and-crafts-collection-202007220710.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202012041128.png",

        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/adventure-collection-202010140844.png",
    ];
    const settingsSm = {
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    const settingMdLg = {
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <div className="md:hidden lg:hidden w-full">
                <div className="mt-10 px-4 font-bold text-4xl">The Best Of Entertainment</div>
                <Slider {...settingsSm}>
                    {
                        image.map((ig) => (
                            <div>
                                <img className="h-full w-full my-1 p-3 rounded-lg" src={ig} alt="IMG.jpg" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden md:block lg:hidden w-full">
                <div className="mt-5 px-2 font-bold text-4xl">The Best Of Entertainment</div>
                <Slider {...settingMdLg}>
                    {
                        image.map((ig) => (
                            <div>
                                <img className="h-full w-full my-2 p-2 rounded-lg" src={ig} alt="IMG.jpg" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden lg:block w-3/4 m-auto">
                <div className="mt-10 px-4 font-bold text-4xl">The Best Of Entertainment</div>
                <Slider {...settingMdLg}>
                    {
                        image.map((ig) => (
                            <div className="">
                                <img className="h-full w-full my-2 p-3 rounded-2xl" src={ig} alt="IMG.jpg" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}
export default Ecard;