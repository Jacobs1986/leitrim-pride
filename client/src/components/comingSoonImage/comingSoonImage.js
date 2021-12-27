import React from "react";

//Styling
import "./comingSoonImage.css";

// Bootstrap
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function ComingSoonImage() {
    return (
        <div>
            <Container className="comingSoonImageContainer">
                <Row>
                    <Col xs={12}>
                        <Image 
                            fluid
                            src='./Images/logo.jpg'
                            alt="Leitrim Pride Logo"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};