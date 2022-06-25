import React, { useState } from "react";



import { AiOutlinePicLeft } from "react-icons/ai";

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    if (!text) {
        return (
            <></>
        );
    }
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide hover:cursor-pointer text-gray-500">
                {isReadMore ? "...read more" : "  read less"}
            </span>
        </div>
    );
};

function AboutCompo(props) {
    return (
        <>
            <div className="lg:w-4/5 lg:m-auto lg:my-10 flex flex-col gap-10 py-10 px-6 w-full">
                <div className="lg:w-3/4 w-full flex flex-col gap-4">
                    <div className="text-3xl font-semibold">About the movie</div>
                    <ReadMore >
                        {props.about}
                    </ReadMore>
                    <hr />
                </div>
                <div className="lg:w-2/5 md:w-3/5 w-full flex flex-col gap-10 ">
                    <div className="text-3xl font-semibold">Applicable offers</div>
                    <div className="flex gap-4 bg-border-50 md:py-4 md:px-8 py-2 px-4 border-dashed border-border-300 border-2 rounded items-center">
                        <div>
                            <AiOutlinePicLeft className="md:text-3xl text-2xl" />
                        </div>
                        <div >
                            <div className="font-semibold md:text-xl">
                                RRROAR BEGINS ON STREAM
                            </div>
                            <div className="md:text-lg text-sm">
                                Watch at home now &#64; Rs 179/-
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}
export default AboutCompo;