import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// MdPlayArrow
import { MdPlayArrow } from "react-icons/md";
import Poster from "./Poster";

function PosterSlider(props) {
    return (
        <>
            <div className={`flex flex-col pb-8 ${props.isDark ? "text-white" : ""}`} style={{ backgroundColor: props.bgColor }}>
                <div className={`${props.isDark ? "" : "hidden"}`}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" className="m-auto w-full md:w-4/5 lg:w-5/6 px-4" />
                </div>
                <div className="flex m-auto w-4/5 lg:w-5/6 p-4 justify-between">
                    <div>
                        <div className="text-2xl font-bold">
                            {props.posterTitle}
                        </div >
                        <div className={`font-medium tracking-tight ,${props.isSubTitle ? "" : "hidden"} `}>
                            {props.posterSubTitle}
                        </div>
                    </div>
                    <a href={`http://localhost:3000/explore/${props.pth}`}  className={`flex items-center text-sm hover:underline ${props.isDark ? "text-white" : "text-red-700"}`}>See all <MdPlayArrow /></a>
                </div>
                <div>
                    <div className="hidden md:hidden lg:block lg:m-auto lg:w-5/6 ">
                        <Slider {...props.settingCaruosel.settingsCaruoselLg} >
                            {
                                props.posters.map((popo) => (<Poster {...popo} />))
                            }
                        </Slider >
                    </div>
                    <div className="hidden md:block lg:hidden md:m-auto md:w-4/5 ">
                        <Slider {...props.settingCaruosel.settingsCaruoselMd} >
                            {
                                props.posters.map((popo) => (<Poster {...popo} />))
                            }
                        </Slider >
                    </div>
                    <div className="md:hidden lg:hidden w-4/5 m-auto ">
                        <Slider {...props.settingCaruosel.settingsCaruoselSm} >
                            {
                                props.posters.map((popo) => (<Poster {...popo} />))
                            }
                        </Slider >
                    </div>
                </div>
            </div>
        </>
    );
};
export default PosterSlider;
// 2B3148