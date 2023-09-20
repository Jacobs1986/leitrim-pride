import React from "react";

// CSS File
import "./homePage-styles.css";

export default function HomePageLit() {
    return (
        <div className="container">
            <div className="row">
                {/* Home Page literature */}
                <div className="col-xl-12">
                    {/* Paragraph 1 */}
                    <p className="homePageLitP">
                        Leitrim Pride seeks to bring together individuals and organisations to empower, educate and support the Leitrim LGBTQI+ community through the production of an annual community LGBTQI+ Pride Festival and events throughout the year.
                    </p>
                    {/* Paragraph 2 */}
                    <p className="homePageLitP">
                        Leitrim Pride envisions a unified community where diverse individuals are celebrated and are able to thrive as their authentic selves.
                    </p>
                </div>
            </div>
        </div>
    );
};