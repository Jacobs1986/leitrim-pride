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
                <a href="/">Home</a>
                {/* About Dropdown */}
                <div className="dropdown">
                    <button className="dropbtn">About
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
                <a href="/getinvolved">Get Involved</a>
                {/* Events Link */}
                <a href="/events">Events</a>
                {/* Donate Link */}
                <a href="/donate">Donate</a>
                {/* Contact */}
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};