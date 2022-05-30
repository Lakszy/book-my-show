import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


import MoviePoster from "../Components/MoviePoster/MoviePosterCompo";
import AboutCompo from "../Components/MoviePoster/AboutCompo";
import CCcarousel from "../Components/MoviePoster/CCcarousel";




function MoviePage(props) {



    const [detailsMovie, setDetails] = useState([]);
    useEffect(() => {
        const requestDetails = async () => {
            const requestedDetails = await axios.get(`/movie/${props.path}`);
            setDetails(requestedDetails.data);
        }
        requestDetails();
    }, []);




    const [castCrew, setCastCrew] = useState([]);
    useEffect(() => {
        const requestCastCrew = async () => {
            const requestedCastCrew = await axios.get(`/movie/${props.path}/credits`);
            setCastCrew(requestedCastCrew.data);
        }
        requestCastCrew();
    }, []);




    return (
        <>
            <MoviePoster Mdetails={detailsMovie} />
            <AboutCompo about={detailsMovie.overview} />
            <CCcarousel arr={castCrew} />
        </>
    )
};
export default MoviePage;