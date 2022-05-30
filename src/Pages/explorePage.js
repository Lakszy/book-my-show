import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import axios from "axios";


import HeroCarouselCo from "../Components/Carousel/HeroCarouselCompo";
import CardExpo from "../Components/Explore/cardExpo";


function Explore() {


    let params = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const requestDetails = async () => {
            const requestedDetails = await axios.get(`/movie/${params.topic}`);
            setDetails(requestedDetails.data.results);
        }
        requestDetails();
    }, []);


    const title = {
        "now_playing": "Now Playing",
        "top_rated": "Top Rated",
        "popular": "Popular",
        "upcoming": "Upcoming",
    };


    return (
        <>
            <HeroCarouselCo />
            <CardExpo cardDetails={details} title={title[params.topic]} />
        </>
    )
};
export default Explore;