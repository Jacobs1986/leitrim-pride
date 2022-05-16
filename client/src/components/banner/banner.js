import React from "react";

//Styling
import "./banner.css";

// Bootstrap
import { Container, Image } from 'react-bootstrap';

export default function Banner() {
    return (
        <div>
            <Container className='bannerContainer' fluid>
                <Image
                    src={require('./homePageBannerOrg.jpg')}
                    alt='banner'
                    width='100%'
                />
                <div className='overlay'>A FIRST TIME FOR EVERYTHING</div>
            </Container>
        </div>
    );
};