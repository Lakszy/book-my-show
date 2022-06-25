import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { MdPlayArrow } from "react-icons/md";
import Poster from "./Poster";



function PosterSlider(props) {
    return (
        <>
            <div className={`flex flex-col  ${props.isDark ? "text-white py-6" : ""}`} style={{ backgroundColor: props.bgColor }}>
                <div className={`${props.isDark ? "" : "hidden"}`}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" className="m-auto w-full md:w-4/5 lg:w-5/6 px-4" />
                </div>
                <div className="flex m-auto w-full  md:w-4/5 lg:w-5/6 p-4 justify-between items-center">
                    <div>
                        <div className="md:text-2xl font-bold text-xl">
                            {props.posterTitle}
                        </div >
                        <div className={`font-medium tracking-tight md:text-base text-xs ,${props.isSubTitle ? "" : "hidden"} `}>
                            {props.posterSubTitle}
                        </div>
                    </div>
                    <Link to={`/explore/${props.pth}`}>
                        <div className={`flex items-center text-sm hover:underline ${props.isDark ? "text-white" : "text-red-700"}`}>
                            See all <MdPlayArrow />
                        </div>
                    </Link>
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
                    <div className="md:hidden lg:hidden w-[90%] m-auto ">
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