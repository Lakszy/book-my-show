import React from "react";
import { Link } from "react-router-dom";


function Poster(props) {
    return (
        <>
            <Link to={`/movie/${props.id}`}>
                <div className="flex flex-col md:px-4 px-2 rounded-t-lg">
                    <div className="">
                        <img className="rounded-t-lg hover:shadow-xl hover:shadow-slate-600 hover:scale-105 transition-all duration-300" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </div>
                    <div className="font-semibold md:text-lg text-sm pt-3 pb-2 leading-tight text-center">
                        {props.title}
                    </div>
                    <div className="w-full md:text-base text-xs text-center">
                        {props.release_date}
                    </div>
                </div>
            </Link>
        </>
    );
};
export default Poster;