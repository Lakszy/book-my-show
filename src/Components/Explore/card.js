import React from "react";


import { BiRupee } from "react-icons/bi";


function Card(props) {


    const lan = {
        "hi": "Hindi",
        "en": "English",
        "ja": "Japanese",
        "es": "Spanish"
    }


    return (
        <>
            <div className="flex flex-col lg:w-1/4 w-1/3" >
                <div className="px-4">
                    <a href={`http://localhost:3000/movie/${props.id}`}>
                        <img className="rounded-lg shadow-2xl" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </a>
                </div>
                <div className="font-semibold md:text-lg text-sm px-4 pt-4 leading-tight">
                    {props.title}
                </div>
                <div className="px-4 md:text-base text-xs text-gray-600">
                    {lan[props.original_language]}
                </div>
                <div className="flex items-center px-4 md:text-base text-xs text-gray-600">
                    <BiRupee />{Math.floor((Math.random() * 100) + 10) * 10}<div></div>
                </div>
            </div>
        </>
    );
};
export default Card;