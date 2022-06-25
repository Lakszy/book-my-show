import React from "react";


import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";


function Card(props) {


    const lan = {
        "hi": "Hindi",
        "en": "English",
        "ja": "Japanese",
        "es": "Spanish"
    }


    return (
        <>
            <Link to={`/movie/${props.id}`}>
                <div className="flex flex-col w-full gap-2 rounded-lg " >
                    <div className="">
                        <img className="rounded-t-lg hover:shadow-xl hover:shadow-slate-600 transition-all duration-300" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </div>
                    <div className="flex flex-col gap-1 px-2">
                        <div className="font-semibold md:text-lg text-sm leading-tight">
                            {props.title}
                        </div>
                        <div className="flex flex-col">
                            <div className="md:text-base text-xs text-gray-600">
                                {lan[props.original_language]}
                            </div>
                            <div className="flex items-center md:text-base text-xs text-gray-600">
                                <BiRupee />
                                {Math.floor((Math.random() * 100) + 10) * 10}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default Card;