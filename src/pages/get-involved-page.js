import React from "react";

// Components
import GetInvolvedBanner from "../components/getInvolvedPage/getInvolvedBanner";
import JoinTheTeam from "../components/getInvolvedPage/joinTheTeam";
import VolunteeringRoles from "../components/getInvolvedPage/volunteeringRoles";
import VolunteeringOffer from "../components/getInvolvedPage/volunteeringOffers";

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
            {/* Volunteering section */}
            <div className="row">
                <div className="col-xs-12 col-s-6">
                    {/* Roles */}
                    <VolunteeringRoles />
                </div>
                <div className="col-xs-12 col-s-6">
                    {/* Offers */}
                    <VolunteeringOffer />
                </div>
            </div>
        </div>
    );
};