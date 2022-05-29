import React from "react";
import HeroCarouselCo from "../Components/Carousel/HeroCarouselCompo";
import CardExpo from "../Components/Explore/cardExpo";

import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";


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