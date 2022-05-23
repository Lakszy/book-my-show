import React from "react"; 

function Poster(props) {
    return (
        <>
            <div className="flex flex-col">
                <div className="px-4 ">
                    <img className="rounded-lg" src={props.src} alt={props.title} />
                </div>
                <div className="font-semibold text-lg px-4 pt-3 pb-2 leading-tight">
                    {props.title}
                </div>
                <div className="px-4 w-full">
                    {props.subTitle}
                </div>
            </div>
        </>
    );
};
export default Poster;