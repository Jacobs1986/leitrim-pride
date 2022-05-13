import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

// Components
import WhoWeAreImage from "../components/whoWeAreImage/whoWeAreImage";

export default function About() {
    return (
        <div>
            <h1 className="centerText">Who We Are</h1>
            <Container>
                <Row>
                    <Col md={6}>
                        <WhoWeAreImage />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};