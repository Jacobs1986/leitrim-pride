import React from "react";

// CSS File
import "./whoWeAreImage.css"

// Bootstrap
import { Image } from 'react-bootstrap';

export default function WhoWeAreImage() {
    return (
        // <div id="whoWeAreImageDiv"></div>
        <div>
            <Image 
                src={require('./whoWeAreImageVert.jpg')}
                alt="Picture"
                fluid
            />
        </div>
    );
};