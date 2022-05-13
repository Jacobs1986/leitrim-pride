import React from "react";

// Bootstrap
import { Image } from 'react-bootstrap';

export default function WhoWeAreImage() {
    return (
        <div>
            <Image 
                src={require('./whoWeAreImage.jpeg')}
                alt="Picture"
                fluid
            />
        </div>
    );
};