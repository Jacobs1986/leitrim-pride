import React from "react";

// Components
import WhoWeAreImage from "../components/aboutPage/whoWeAreImage";
import AboutLit from "../components/aboutPage/aboutLit";
import OurMission from "../components/aboutPage/ourMission";
import OurValues from "../components/aboutPage/ourValues";

export default function About() {
    return (
        <div>
            {/* Page Title */}
            <h1 style={{ textAlign: "center"}}>Who We Are</h1>
            {/* Page Content */}
            <div className="container">
                <div className="row">
                    {/* Image */}
                    <div className="col-xs-12 col-lg-5">
                        <WhoWeAreImage />
                    </div>
                    {/* Literature */}
                    <div className="col-xs-12 col-lg-7">
                        <AboutLit />
                        <OurMission />
                        <OurValues />
                    </div>
                </div>
            </div>
        </div>
    );
};