import React from "react";

// CSS File
import "./teamPage-styles.css";

// Import teamInfo
import teamInfo from "./teaminfo.json";

export default function TeamInfo() {
    return (
        <div>
            {/* Map out teamInfo json */}
            {teamInfo.map(member => (
                <div>
                    {/* Check to see if a member has a bio */}
                    {!member.text ?
                        // If not return an empty row
                        <div className="row"></div> :
                        // Begin a new row
                        <div className="row bioRow" key={member.id}>
                            {/* First column has the picture */}
                            <div className="col-xs-12">
                                {/* Check to see if there is an image */}
                                {!member.image ?
                                    // If no image show a pride flag
                                    <img
                                        src="./Images/pride-flag-01.webp"
                                        alt="Pride Flag"
                                        width="100%"
                                    /> :
                                    // Show provided image
                                    <img
                                        src={`./Images/${member.image}`}
                                        alt={`${member.name} Headshot`}
                                        width="100%"
                                    />
                                }
                                {/* Member's name, title and preferred pronouns */}
                                <div className="memberDiv">
                                    <h2>
                                        {member.name}
                                    </h2>
                                    <h4>
                                        Title: {member.title}
                                    </h4>
                                    <h4>
                                        Pronouns: {member.pronouns}
                                    </h4>
                                </div>
                            </div>
                            {/* Members biographical information */}
                            <div className="col-xs-12">
                                {/* Split the text so that it comes out in paragraphs */}
                                {member.text.split("\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};