import React from "react";



function Poster(props) {
    return (
        <>
            <div className="flex flex-col">
                <div className="px-4 ">
                    <a href={`http://localhost:3000/movie/${props.id}`}>
                        <img className="rounded-lg shadow-2xl" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
                    </a>
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