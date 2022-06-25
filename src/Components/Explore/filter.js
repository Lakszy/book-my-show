import React from "react";


import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";


function Filter(props) {
    return (
        <>
            <div className="flex flex-col lg:w-[25%] md:w-[30%]  w-full gap-10">
                <div className="text-3xl font-semibold">Filters</div>
                <div className="flex flex-col gap-4 ">
                    {
                        props.filter.map((topic) => (
                            <div className="bg-white px-4 py-4 border-2 border-gray-300 rounded-2xl">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button>
                                                {
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <BsChevronDown className={`${open ? "transform rotate-180" : ""}`} />
                                                        <div className={`font-medium hover:underline ${open ? "text-red-700" : ""}`}>{topic.title}</div>
                                                        <div className="text-gray-600">clear</div>
                                                    </div>
                                                }
                                            </Disclosure.Button>
                                            <Disclosure.Panel>
                                                {
                                                    <div className="flex gap-1 gap-y-2 flex-wrap m-3">
                                                        {
                                                            topic.array.map((l) => (
                                                                <button className="text-red-700 bg-white py-1 px-4 md:py-1 md:px-2 lg:py-1 lg:px-4 text-sm border-gray-300 border-2 rounded-3xl hover:underline">{l}</button>))
                                                        }
                                                    </div>
                                                }
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
export default Filter;