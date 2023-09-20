import React from "react";

// CSS File
import "./aboutPage-styles.css";

export default function OurMission() {
    return (
        <div>
            <h4 style={{ textAlign: 'center'}}>Our Mission</h4>
            <ul className='aboutList'>
                <li>
                    Leitrim Pride’s mission is to provide members of Leitrim’s LGBTQI+ community with a LGBTI+ Pride Festival that represents the county of Leitrim.
                </li>
                <li>
                    Leitrim Pride hosts an annual LGBTQI+ Community Arts Festival as part of the diverse, global Pride Movement.
                </li>
                <li>
                    Rural LGBTQI+ voices often go under-represented and Leitrim Pride aims to bridge the gap through an open and inclusive lens.
                </li>
            </ul>
        </div>
    );
};