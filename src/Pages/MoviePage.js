import React from "react";
import MoviePoster from "../Components/MoviePoster/MoviePosterCompo";
import AboutCompo from "../Components/MoviePoster/AboutCompo";
import CCcarousel from "../Components/MoviePoster/CCcarousel";
import { cast, crew } from "../Components/Config/tempCastCrew";
function MoviePage() {
    return (
        <>
            <MoviePoster />
            <AboutCompo />
            <CCcarousel arr={cast} title ={"Cast"}/>
            <CCcarousel arr={crew} title ={"Crew"}/>
        </>
    )
};
export default MoviePage;