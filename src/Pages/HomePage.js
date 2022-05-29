import React from "react";
import { useEffect, useState } from "react";
import Ecard from "../Components/Entertainment/EntertainmentCard";
import settingsCaruosel from "../Components/Config/settingCaruosel";
import PosterSlider from "../Components/Poster/PosterSlider";
import HeroCarouselCo from "../Components/Carousel/HeroCarouselCompo";
import axios from "axios";

function HomePage() {


    const [top_rated, setTop_rated] = useState([]);
    useEffect(() => {
        const requestTopRated = async () => {
            const requestedTopRated = await axios.get("/movie/top_rated");
            setTop_rated(requestedTopRated.data.results);
        }
        requestTopRated();
    }, []);


    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const requestPopular = async () => {
            const requestedPopular = await axios.get("/movie/popular");
            setPopular(requestedPopular.data.results);
        }
        requestPopular();
    }, []);

    const [now_playing, setNowPlaying] = useState([]);
    useEffect(() => {
        const requestNowPlaying = async () => {
            const requestedNowPlaying = await axios.get("/movie/now_playing");
            setNowPlaying(requestedNowPlaying.data.results);
        }
        requestNowPlaying();
    }, []);


    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        const requestUpcoming = async () => {
            const requestedUpcoming = await axios.get("/movie/upcoming");
            setUpcoming(requestedUpcoming.data.results);
        }
        requestUpcoming();
    }, []);


    return (
        <>
            <HeroCarouselCo />
            <div className="flex flex-col gap-10">
                <PosterSlider settingCaruosel={settingsCaruosel} posters={top_rated} posterTitle={"Top Rated"} pth={"top_rated"} />
                <div className="lg:w-5/6 m-auto"><img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png" alt="xyz" /></div>
                <Ecard />
                <PosterSlider settingCaruosel={settingsCaruosel} posters={now_playing} posterTitle={"Premeires"} posterSubTitle={"Brand new releases"} isSubTitle={true} isDark={true} bgColor={"#2B3148"} pth={"now_playing"} />
                <PosterSlider settingCaruosel={settingsCaruosel} posters={popular} posterTitle={"Popular"} pth={"popular"} />
                <PosterSlider settingCaruosel={settingsCaruosel} posters={upcoming} posterTitle={"Upcoming"} pth={"upcoming"} />
            </div>
        </>
    )
};
export default HomePage;