import React from "react";

// CSS File
import "./footer.css";

export default function Footer() {
    return (
        <footer>
            {/* Copyright */}
            <div>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Leitrim Pride 2022
            </div>
            {/* Contact Link */}
            <div className="footerContactDiv">
                <a href="/contact">Contact Us</a>
            </div>
            {/* Social Media Links */}
            <div className="footerIcon">
                {/* Facebook */}
                <a href="https://www.facebook.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/facebook.png"
                        alt="Facebook Icon"
                        style={{ width: "100%" }}
                    />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/leitrimpride/" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/instagram.png"
                        alt="Instagram Icon"
                        style={{ width: "100%" }}
                    />
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/twitter.png"
                        alt="Twitter Icon"
                        style={{ width: "100%" }}
                    />
                </a>
            </div>
        </footer>
    );
};