import React from "react";
import Img from "./posterImg.jpg";
import { FaHeart } from "react-icons/fa";
import { BiChevronRight, BiShareAlt } from "react-icons/bi";
import {BsShare} from "react-icons/bs"; 

function MoviePoster(props) {
    return (
        <>
            <div >
                <div className="w-full absolute">
                    <img className="w-full" src={Img} alt="" style={{ height: "32rem" }} />
                </div>
                <div className="w-full relative flex items-center" style={{ height: "32rem", backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" ,fontFamily:"Sans-serif"}}>
                    <div className="flex w-full lg:w-3/4 m-auto">
                        <div className="w-96 ">
                            <div className="p-4 w-full flex flex-col items-center">
                                <img className="w-full rounded-t-2xl shadow-2xl cursor-pointer" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg" alt="" />
                                <div className=" w-full text-center text-white text-sm bg-black rounded-b-2xl py-1">In cinemas</div>
                            </div>
                        </div>
                        <div className="flex w-full text-white justify-between ">
                            <div className="flex flex-col w-full md:w-3/5 justify-evenly">
                                <div className="lg:text-4xl font-bold text-3xl " >Doctor Strange: In The &nbsp;&nbsp; Multiverse Of Madness</div>
                                <div className="flex items-end gap-3">
                                    <FaHeart className="text-3xl text-red-700" />
                                    <div className="text-3xl font-bold">82%</div>
                                    <div className="flex items-center">188.7K ratings<BiChevronRight /></div>
                                </div>
                                <div className="hidden md:flex justify-between items-center text-lg px-5 py-2 rounded-lg" style={{ backgroundColor: "#333333" }}>
                                    <div className="">
                                        <div className="font-bold">Add your rating & review
                                        </div>
                                        <div className="text-gray-300">Your ratings matter
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-white font-semibold px-2.5 py-1 rounded w-28" style={{ color: "#333333" }}>Rate now</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-black px-2 rounded-sm " style={{ backgroundColor: "#E5E5E5" }}>
                                        2D, 3D SCREEN X, 3D, IMAX 2D, 4DX 3D, IMAX 3D, 4DX
                                    </div>
                                    <div className="text-black px-2 rounded-sm" style={{ backgroundColor: "#E5E5E5" }}>
                                        English, Hindi, Kannada, Malayalam, Tamil, Telugu
                                    </div>
                                </div>
                                <div >
                                    2h 6m • Action, Adventure, Fantasy • UA • 6 May, 2022
                                </div>
                                <div className="flex gap-6">
                                    <button className="bg-red-700 text-xl font-semibold px-8 py-3 rounded-lg">Book tickets</button>
                                    <button className="flex items-center text-lg gap-3W px-3.5 py-2 rounded-md md:hidden" style={{backgroundColor: "rgba(34, 34, 34, 0.8)"}}><BsShare className="text-3xl"/><div className="font-semibold">Share</div></button>
                                </div>
                            </div>
                            <div>
                                <button className="md:flex items-center text-lg gap-3 px-3.5 py-2 rounded-md hidden" style={{backgroundColor: "rgba(34, 34, 34, 0.8)"}}><BsShare className="text-3xl font-bold"/><div className="font-semibold">Share</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MoviePoster;

