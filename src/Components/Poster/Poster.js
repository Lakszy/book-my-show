import React from "react";
import { Link } from "react-router-dom";


function Poster(props) {
    return (
        <>
            <div className="flex flex-col">
                <div className="px-4 ">
                    <Link to={`/movie/${props.id}`}>
                    <img className="rounded-lg shadow-2xl" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </Link>
                </div>
                <div className="font-semibold text-lg px-4 pt-3 pb-2 leading-tight">
                    {props.title}
                </div>
                <div className="px-4 w-full">
                    {props.release_date}
                </div>
            </div>
        </>
    );
};
export default Poster;