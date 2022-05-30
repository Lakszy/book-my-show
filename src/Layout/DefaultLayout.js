import React from "react";



import NavBarCompo from "../Components/NavBar/NavBarCompo";
import Footer from "../Components/footer/footer";



function DefaultLayout(props) {
    return (
        <>
            <NavBarCompo {...props} />
            {props.children}
            <Footer />
        </>
    );
};
export default DefaultLayout;