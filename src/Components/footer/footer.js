import React from "react";


import careLogo from "../footer/customerCareLogo.png";


import { ImFacebook, ImYoutube, ImLinkedin, ImPinterest, ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";



function Footer() {
    const help = [
        { e: "About Us", link_: "https://in.bookmyshow.com/aboutus" },
        { e: "Contact Us", link_: "https://in.bookmyshow.com/contactus" },
        { e: "FAQs", link_: "https://support.bookmyshow.com/support/solutions" },
        { e: "Terms and Conditions", link_: "https://in.bookmyshow.com/terms-and-conditions" },
        { e: "Privacy Policy", link_: "https://in.bookmyshow.com/privacy" },
    ];
    return (<>
        <footer class="flex flex-col items-center gap-8 bg-footer-1 text-footer-4 py-8">
            <div className="flex flex-col items-center w-full bg-footer-2">
                <img className="w-20" src={careLogo} />
                <div className="text-footer-3 cursor-default">24/7 Customer Care </div>
            </div>
            <div className="flex flex-col items-center w-full " >
                <div className="font-semibold text-footer-3 text-xl">Help</div>
                <div className="flex flex-wrap cursor-default">
                    {
                        help.map((ele) => (
                            <>
                                &nbsp;|&nbsp;
                                <a className="hover:underline hover:text-white cursor-pointer transition-all duration-300" href={ele.link_} target="_blank">{ele.e}</a>
                                &nbsp;|&nbsp;
                            </>
                        ))
                    }
                </div>
            </div>
            <div>
                <a href="http://localhost:3000/"><img alt="bookmyshow" src="//in.bmscdn.com/webin/common/icons/logo.svg"></img></a>
            </div>
            <div className="flex gap-4 text-3xl ">
                <a target="_blank" href="https://www.linkedin.com/in/arjun-verma-45059a215/"><ImLinkedin className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://www.facebook.com/BookMyShowIN"><ImFacebook className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://twitter.com/BookMyShow/"><ImTwitter className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://www.instagram.com/bookmyshowin/"><AiFillInstagram className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://www.youtube.com/user/BookMyShow/featured"><ImYoutube className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://www.pinterest.com/bookmyshow/"><ImPinterest className="hover:text-white cursor-pointer transition-all duration-300" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/arjun-verma-45059a215/"><ImLinkedin className="hover:text-white cursor-pointer transition-all duration-300" /></a>
            </div>
            <div className="text-center text-sm">
                Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                <br />
                The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
            </div>
        </footer>
    </>);
}
export default Footer;