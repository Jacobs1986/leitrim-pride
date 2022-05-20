import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

// Components
import WhoWeAreImage from "../components/whoWeAreImage/whoWeAreImage";
import WhoWeAreLit from "../components/whoWeAreLit/whoWeAreLit";

export default function About() {
    return (
        <div>
            <h1 className="centerText">Who We Are</h1>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <WhoWeAreImage />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <WhoWeAreLit />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};