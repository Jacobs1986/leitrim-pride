import React from "react";

// CSS File
import "./aboutPage-styles.css";

export default function ConstitutionLink() {
    return (
        <div>
            <p>
                For more information please <a
                    href="constitution.pdf"
                    target="_blank"
                >click here</a> to view our constitution.
            </p>
        </div>
    );
};