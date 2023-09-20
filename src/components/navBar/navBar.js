import React from "react";
// Fa icon
import { FaCaretDown } from "react-icons/fa";

// CSS File
import "./navBar.css";

// Function for showing the dropdown
const handleShowDropDwn = () => {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

export default function NavBar() {
    return (
        <div>
            {/* Icon */}
            <div className="icon" onClick={handleShowDropDwn}>&#9776;</div>
            {/* Navigation bar */}
            <div className="topNav" id="myTopNav">
                {/* Home page Link */}
                <a href="/" id="homeLink">Home</a>
                {/* About Dropdown */}
                <div className="dropdown">
                    <button className="dropbtn" id="aboutBtn">About
                        <FaCaretDown />
                    </button>
                    {/* Dropdown content */}
                    <div className="dropdown-content">
                        {/* About link */}
                        <a href="/about">Who We Are</a>
                        {/* Team link */}
                        <a href="/team">Meet The Team</a>
                    </div>
                </div>
                {/* Get Involved Link */}
                <a href="/getinvolved" id="getinvolvedLink">Get Involved</a>
                {/* Events Link */}
                <a href="/events" id="eventsLink">Events</a>
                {/* Donate Link */}
                <a href="/donate" id="donateLink">Donate</a>
                {/* Contact */}
                <a href="/contact" id="contactLink">Contact</a>
            </div>
        </div>
    );
};