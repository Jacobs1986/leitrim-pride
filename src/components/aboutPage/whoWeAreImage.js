import React from "react";

// CSS File
import "./aboutPage-styles.css";

export default function WhoWeAreImage() {
    return (
        <div>
            {/* The vertical image, this will only appear when other content is side-by-side */}
            <img 
                src="./Images/whoWeAreImageVert.jpg"
                id="whoWeAreVertImage"
            />
            {/* The horizontal image, this will appear as a banner on small screens */}
            <img 
                src="./Images/whoWeAreImageSide.jpg"
                id="whoWeAreHorzImage"
            />
        </div>
    );
};