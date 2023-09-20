import React from "react";

// CSS File
import "./homePage-styles.css";

export default function HomePageBanner() {
    return (
        <div className="homePageBannerDiv">
            {/* Image */}
            <img 
                src="./Images/homePageBannerOrg.jpg"
                alt="Home page banner"
                width="100%"
            />
            {/* Overlay */}
            <div className="homePageBannerOverlay">LEITRIM PRIDE</div>
        </div>
    );
};