import React from "react";

// CSS File
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            {/* Copyright */}
            <div>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Leitrim Pride 2022
            </div>
            {/* Contact Link */}
            <div>
                <a href="/contact">Contact Us</a>
            </div>
            {/* Social Media Links */}
            <div>
                {/* Facebook */}
                <a href="https://www.facebook.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/facebook.png"
                        alt="Facebook Icon"
                        className="footerIcon"
                    />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/leitrimpride/" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/instagram.png"
                        alt="Instagram Icon"
                        className="footerIcon"
                    />
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                    <img
                        src="./icons/twitter.png"
                        alt="Twitter Icon"
                        className="footerIcon"
                    />
                </a>
            </div>
        </div>
    );
};