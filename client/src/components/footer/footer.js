import React from "react";

// CSS File
import "./footer.css";

// Bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className="centerText">
            <Container>
                <Row>
                    <Col lg={4}>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Leitrim Pride 2022
                        </div>
                        <div>
                            <a href='/contact'>Contact Us</a> | 
                            <a href="https://www.facebook.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                                <Image src='./Images/facebook.png' alt='Facebook icon' className="footerSocialMediaIcon" />
                            </a>
                            <a href="https://www.instagram.com/leitrimpride/" target={"_blank"} rel='noreferrer'>
                                <Image src='./Images/instagram.png' alt='Instagram icon' className="footerSocialMediaIcon" />
                            </a>
                            <a href="https://twitter.com/LeitrimPride" target={"_blank"} rel='noreferrer'>
                                <Image src='./Images/twitter.png' alt='Twitter icon' className="footerSocialMediaIcon" />
                            </a>
                        </div>
                    </Col>
                    <Col lg={4}>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};