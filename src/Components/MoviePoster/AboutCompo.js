import React from "react";
import { AiOutlinePicLeft } from "react-icons/ai";
// AiOutlinePicLeft
function AboutCompo(props) {
    return (
        <>
            <div className="lg:w-4/5 lg:m-auto lg:my-10 flex flex-col gap-10 m-10 w-full">
                <div className="lg:w-3/4 w-full flex flex-col gap-4">
                    <div className="text-3xl font-semibold">About the movie</div>
                    <div className="text-lg ">
                        {props.about}
                    </div>
                    <hr />
                </div>
                <div className="lg:w-2/5 md:w-3/5 w-full flex flex-col gap-10 ">
                    <div className="text-3xl font-semibold">Applicable offers</div>
                    <div className="flex gap-4 bg-border-50 py-4 px-8 border-dashed border-border-300 border-2 rounded">
                        <div>
                            <AiOutlinePicLeft className="text-3xl"/>
                        </div>
                        <div >
                            <div className="font-semibold text-xl">
                                RRROAR BEGINS ON STREAM
                            </div>
                            <div className="text-lg">
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