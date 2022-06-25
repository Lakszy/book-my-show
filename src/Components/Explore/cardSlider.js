import React from "react";


import Card from "./card";


function CardSlide(props) {
    return (
        <>
            <div className="flex flex-col lg:w-2/3 md:w-[70%] gap-8 lg:px-10 md:px-4">
                <div className="text-3xl font-semibold">
                    {props.title}
                </div>
                <div className="md:flex gap-4 flex-wrap hidden">
                    {
                        props.lang.map((l) => (
                            <button className="text-red-700 bg-white py-1 px-4 text-sm border-gray-300 border-2 rounded-3xl hover:underline">{l}</button>
                        ))
                    }
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                    {
                        props.cardDetails.map((card) => (
                            <Card {...card} className="" />
                        ))
                    }
                </div>
            </div>
        </>
    );
};
export default CardSlide;