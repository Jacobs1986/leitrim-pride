import React from "react";

// Components
import TeamInfo from "../components/teamPage/teamInfo";

export default function Team() {
    return (
        <div>
            {/* Page title */}
            <h1 style={{ textAlign: "center"}}>
                Meet Our Team
            </h1>
            {/* Team Info */}
            <TeamInfo />
        </div>
    );
};