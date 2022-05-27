import React from "react";
// import Ecard from "../Components/Entertainment/EntertainmentCard";
// import settingsCaruosel from "../Components/Config/settingCaruosel";
// import tempPhoto from "../Components/Config/TempPhoto";
// import PosterSlider from "../Components/Poster/PosterSlider";
import HeroCarouselCo from "../Components/Carousel/HeroCarouselCompo";
import cardPhoto from "../Components/Config/cardExpo";
import CardExpo from "../Components/Explore/cardExpo";
function Explore() {
    return (
        <>
            <HeroCarouselCo/>
            <CardExpo cardDetails={cardPhoto} title={"Movies In Delhi"}/>
        </>
    )
};
export default Explore;