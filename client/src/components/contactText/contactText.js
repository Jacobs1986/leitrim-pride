import React from "react";

// CSS File
import "./contactText.css";

// Bootstrap
import {
    Row,
    Col,
    Image
} from 'react-bootstrap'

export default function ContactText() {
    return (
        <div>
            <h1 className="centerText">Contact Us</h1>
            <Row>
                <Col>
                    <p>
                        We love hearing from people in our community. Our goal is to provide resources and support that allows you to celebrate the wonderful uniqueness that is you. Please take a moment to send us a message letting us know how we are doing.
                    </p>
                    <p>
                        As a nonprofit we rely on community members to help us put on events. We’re always looking for new faces to help out. Send us a message to let us know how you can get involved!
                    </p>
                    <p>
                        And as always don’t forget to follow us on our social media:
                    </p>
                    <a href="https://www.facebook.com/LeitrimPride" target="_blank" rel="noreferrer">
                        <Image src='./Images/facebook.png' alt='Facebook Icon' className='contactPageSocialMediaIcon' />
                    </a>
                    <Image src='./Images/instagram.png' alt='Instagram Icon' className='contactPageSocialMediaIcon' />
                    <Image src='./Images/twitter.png' alt='Twitter Icon' className='contactPageSocialMediaIcon' />
                </Col>
            </Row>
        </div>
    );
};