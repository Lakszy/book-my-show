import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { CgMenu } from "react-icons/cg";
import { VscChevronLeft } from "react-icons/vsc";
import logo from "../NavBar/bookmyshowLogo.jpg"
function NavSm(props) {
    return (
        <>
            <div className={`flex items-center justify-between ${props.isExpo ? "hidden" : ""}`}>
                <div>
                    <div className="text-2xl font-bold">It All Starts Here!</div>
                    <span className="flex items-center">Delhi <BiChevronRight />
                    </span>
                </div>
                <div className="flex">
                    <button className="mx-2 px-3 py-1 bg-navBar-100 text-navBar-800 font-bold rounded">USE APP</button>
                    <div className="w-8 h-8">
                        <BiSearch className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-between ${props.isExpo ? "" : "hidden"}`}>
                <div className="flex items-center">
                    <VscChevronLeft className="w-10 h-10" />
                    <div>Movies in Delhi</div>
                </div>
                <BiSearch className="w-8 h-8" />
            </div>
        </>
    );
}
function NavMdLg() {
    return (
        <>
            <div className="flex  m-2 items-center gap-7 md:w-3/4 lg:w-1/2">
                <div className="pl-2"> <a href={`http://localhost:3000/`}><img className="w-full h-12" src={logo}/></a></div>
                <form class="flex w-full">
                    <button class="w-14 h-12 bg-navBar-100 text-navBar-800 rounded-l-lg" type="submit">
                        <BiSearch className="w-full h-full p-2.5" />
                    </button>
                    <input class="placeholder:italic  w-full rounded-r-md pl-3 pr-3 shadow-sm placeholder-shown text-black" placeholder="Search for Movies, Events, Play, Sports and Activites..." type="text" name="search" />
                </form>
            </div>
            <div className="flex items-center gap-4">
                <span className="flex items-center">Delhi<TiArrowSortedDown /></span>
                <button className="px-3 py-1 bg-navBar-100 text-navBar-800 font-bold rounded w-20">Sign in
                </button>
                <button className="w-8 h-8">
                    <CgMenu className="w-full h-full" />
                </button>
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