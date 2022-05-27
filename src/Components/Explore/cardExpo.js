import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Filter from "./filter";
import CardSlide from "./cardSlider";
import cardPhoto from "../Config/cardExpo";
function CardExpo(props) {
    const lang = ["Hindi", "English", "Punjabi", "English 7D", "Tamil", "Telugu", "Bengali", "Malayalam", "Chattisgarhi", "Marathi"];
    const filter = [
        {
            title: "Languages",
            array: ["Hindi", "English", "Punjabi", "English 7D", "Tamil", "Telugu", "Bengali", "Malayalam", "Chattisgarhi", "Marathi"]
        },
        {
            title: "Genres",
            array: ["Drama", "Action", "Adventure", "Comedy", "Thriller", "Animation", "Romantic", "Crime", "Family", "Historical", "Horror", "Period", "Sci-Fi", "Biography", "Classic", "Fantasy", "Musical", "Political"]
        }
        ,
        {
            title: "Format",
            array: ["2D", "3D", "4DX", "4DX 3D", "7D", "MX4D 3D", "3D SCREEN X", "IMAX 2D", "IMAX 3D"]
        }
    ];
    return (
        <>
            <div className="py-10 m-auto">
                <div className="flex md:flex-row md:gap-0 flex-col gap-10 w-full  m-auto justify-center  md:mx-8 px-10">
                    <Filter filter={filter} className="md:flex w-full block m-auto justify-center" />
                    <CardSlide lang={filter[0].array} cardDetails={cardPhoto} title={props.title}  />
                </div>
            </div >
        </>
    );
};
export default CardExpo;