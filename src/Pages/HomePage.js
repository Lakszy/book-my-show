import React from "react";
import Ecard from "../Components/Entertainment/EntertainmentCard";
import settingsCaruosel from "../Components/Config/settingCaruosel";
import tempPhoto from "../Components/Config/TempPhoto";
import PosterSlider from "../Components/Poster/PosterSlider";
function HomePage() {
    return (
        <>
            <Ecard />
            <PosterSlider settingCaruosel={settingsCaruosel} posters={tempPhoto} posterTitle={"Premieres"} posterSubTitle={"Brand new releases every Fridaaaaaaaaaaaaaaaaayyyyyyy"} isSubTitle={true} isDark={true} bgColor={"#2B3148"} />
        </>
    )
};
export default HomePage;