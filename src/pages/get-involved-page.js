import React from "react";

// Components
import GetInvolvedBanner from "../components/getInvolvedPage/getInvolvedBanner";
import JoinTheTeam from "../components/getInvolvedPage/joinTheTeam";

export default function GetInvolved() {
    return (
        <div>
            {/* Page Title */}
            <h2 style={{ textAlign: "center" }}>
                Get Involved
            </h2>
            <GetInvolvedBanner />
            {/* Page literature */}
            <div className="row">
                {/* Join the Team */}
                <div className="col-xs-12">
                    <JoinTheTeam />
                </div>
            </div>
        </div>
    );
};