import React from "react";

// Components
import WhoWeAreImage from "../components/aboutPage/whoWeAreImage";

export default function About() {
    return (
        <div>
            {/* Page Title */}
            <h1 style={{ textAlign: "center"}}>Who We Are</h1>
            {/* Page Content */}
            <div className="container">
                <div className="row">
                    {/* Image */}
                    <div className="col-xs-12">
                        <WhoWeAreImage />
                    </div>
                </div>
            </div>
        </div>
    );
};