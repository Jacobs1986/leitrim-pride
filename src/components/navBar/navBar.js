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
                {/* Portfolio Dropdown */}
                <div className="dropdown">
                    <button className="dropbtn">Portfolio
                        <FaCaretDown />
                    </button>
                    {/* Dropdown content */}
                    <div className="dropdown-content">
                        {/* Featured link */}
                        <a href="/featured">Featured</a>
                        {/* Portfolio */}
                        <a href="/portfolio">All Projects</a>
                    </div>
                </div>
                {/* Contact */}
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};