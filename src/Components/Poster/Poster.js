import React from "react";
import { Link } from "react-router-dom";


function Poster(props) {
    return (
        <>
            <Link to={`/movie/${props.id}`}>
                <div className="flex flex-col px-4">
                    <div className="">
                        <img className="rounded-lg hover:shadow-xl hover:shadow-slate-600 transition-all duration-300" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </div>
                    <div className="font-semibold text-lg pt-3 pb-2 leading-tight">
                        {props.title}
                    </div>
                    <div className="w-full">
                        {props.release_date}
                    </div>
                </div>
            </Link>
        </>
    );
};
export default Poster;