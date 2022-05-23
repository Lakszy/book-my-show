import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarCompo from "../Components/NavBar/NavBarCompo";
import HeroCarouselCompo from "../Components/Carousel/HeroCarouselCompo";
function DefaultLayout(props) {
    return (
        <>
            <NavBarCompo />
            <HeroCarouselCompo />
            {props.children}
        </>
    );
};
export default DefaultLayout;