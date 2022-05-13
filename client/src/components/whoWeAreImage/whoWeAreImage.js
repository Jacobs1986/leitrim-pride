import React from "react";

// Bootstrap
import { Image } from 'react-bootstrap';

export default function WhoWeAreImage() {
    return (
        <div>
            <Image 
                src={require('./whoWeAreImage.jpg')}
                alt="Picture"
                fluid
            />
        </div>
    );
};