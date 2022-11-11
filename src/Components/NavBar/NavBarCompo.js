import React from "react";


import { Fragment, useState } from "react";
import { Menu, Transition } from '@headlessui/react'
import { BiSearch } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { VscChevronLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

const states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

function NavSm(props) {
    const [locationCurr, setLocation] = useState("Delhi");
    return (
        <>
            <div className={`flex items-center justify-between ${props.isExpo ? "hidden" : ""}`}>
                <div>
                    <div className="text-2xl font-bold">It All Starts Here!</div>
                    <div className="flex items-center gap-4 z-10 ">
                        <Menu as="div" className="relative inline-block text-left">


                            <div>
                                <Menu.Button className="flex items-center w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    {locationCurr} &nbsp; <TiArrowSortedDown />
                                </Menu.Button>
                            </div>


                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 overflow-y-scroll h-80">
                                        {
                                            states.map((type) => (
                                                <Menu.Item className="flex flex-col text-black px-4 py-2 hover:bg-[#1f2533] w-52 hover:text-white rounded-md text-center overflow-x-auto items-center">
                                                    {({ active }) => (
                                                        <button onClick={() => (setLocation(type))}
                                                            className={`${active ? 'bg-[#1f2533] text-white' : 'text-[#1f2533]'}  group flex w-full items-center rounded-md px-10 py-2 text-sm text-center`}>
                                                            {
                                                                type
                                                            }
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>


                        </Menu>
                    </div>
                </div>
                <div className="flex">
                    <a href="https://play.google.com/store/apps/details?id=com.bt.bms">
                        <button className="mx-2 px-3 py-1 bg-navBar-100 text-navBar-800 font-bold rounded md:text-base text-xs">USE APP</button>
                    </a>
                    <div className="md:w-8 md:h-8 w-6 h-6">
                        <BiSearch className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-between ${props.isExpo ? "" : "hidden"}`}>
                <div className="flex items-center">
                    <VscChevronLeft className="w-10 h-10" />
                    <div>Movies in {locationCurr} &nbsp;</div>
                </div>
                <BiSearch className="w-8 h-8" />
            </div>
        </>
    );
}




function NavMdLg() {
    const [locationCurr, setLocation] = useState("Delhi");
    return (
        <>
            <div className="flex  m-2 items-center gap-7 md:w-3/4 lg:w-1/2">
                <div className="pl-2">
                    <Link to="/">
                        <img className="w-full h-11" alt="bookmyshow" src="//in.bmscdn.com/webin/common/icons/logo.svg">
                        </img>
                    </Link>
                </div>
                <form className="flex w-full">
                    <button className="w-14 h-12 bg-navBar-100 text-navBar-800 rounded-l-lg" type="submit">
                        <BiSearch className="w-full h-full p-2.5" />
                    </button>
                    <input className="placeholder:italic  w-full rounded-r-md pl-3 pr-3 shadow-sm placeholder-shown text-black" placeholder="Search for Movies, Events, Play, Sports and Activites..." type="text" name="search" />
                </form>
            </div>
            <div className="flex items-center gap-4 z-10 ">
                <Menu as="div" className="relative inline-block text-left">


                    <div>
                        <Menu.Button className="flex items-center w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {locationCurr} &nbsp; <TiArrowSortedDown />
                        </Menu.Button>
                    </div>


                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 overflow-y-scroll h-80">
                                {
                                    states.map((type) => (
                                        <Menu.Item className="flex flex-col text-black px-4 py-2 hover:bg-[#1f2533] w-52 hover:text-white rounded-md text-center overflow-x-auto items-center">
                                            {({ active }) => (
                                                <button onClick={() => (setLocation(type))}
                                                    className={`${active ? 'bg-[#1f2533] text-white' : 'text-[#1f2533]'}  group flex w-full items-center rounded-md px-10 py-2 text-sm text-center`}>
                                                    {
                                                        type
                                                    }
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))
                                }
                            </div>
                        </Menu.Items>
                    </Transition>


                </Menu>
            </div>
        </>
    );
}


function NavBar(props) {
    return (
        <nav className={`bg-navBar-800 px-4 py-2 text-white ${props.isMovie ? "hidden md:block" : ""}`}>
            <div className="md:hidden lg:hidden">
                <NavSm isExpo={props.isExpo} />
            </div>
            <div className="hidden md:flex md:justify-between lg:justify-around">
                <NavMdLg />
            </div>
        </nav>
    )
}
export default NavBar;