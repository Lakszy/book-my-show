import React from "react"; 
import {BiRupee} from "react-icons/bi";

function Card(props) {
    return (
        <>
            <div className="flex flex-col lg:w-1/4 w-1/3" >
                <div className="px-4">
                    <img className="rounded-lg" src={props.src} alt={props.title} />
                </div>
                <div className="font-semibold md:text-lg text-sm px-4 pt-4 leading-tight">
                    {props.title}
                </div>
                <div className="px-4 md:text-base text-xs text-gray-600">
                    {props.lang}
                </div>
                <div className="flex items-center px-4 md:text-base text-xs text-gray-600">
                    <BiRupee/>{props.price}<div></div>
                </div>
            </div>
        </>
    );
};
export default Card;