import React from "react";

//Styling
import "./banner.css";

// Bootstrap
import { Container, Image } from 'react-bootstrap';

export default function Banner() {
    return (
        <div>
            <Container fluid>
                <Image
                    className='bannerImage' 
                    src='./Images/banner.jpeg'
                    alt='banner'
                    width='100%'
                />
            </Container>
        </div>
    );
};