import React from "react";

// Import components
import HomePageBanner from "../components/homePage/banner";
import HomePageLit from "../components/homePage/literature";

export default function Home() {
    return (
        <div>
            <HomePageBanner />
            <HomePageLit />
        </div>
    );
};