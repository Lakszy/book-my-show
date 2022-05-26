import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarCompo from "../Components/NavBar/NavBarCompo";
function DefaultLayout(props) {
    return (
        <>
            <NavBarCompo {...props}/>
            {props.children}
        </>
    );
};
export default DefaultLayout;