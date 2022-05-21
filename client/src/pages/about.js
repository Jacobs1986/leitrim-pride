import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

// Components
import WhoWeAreImage from "../components/whoWeAreImage/whoWeAreImage";
import OurMission from "../components/whoWeAreLit/ourMission";
import OurValues from "../components/whoWeAreLit/ourValues";
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
                        <OurMission />
                        <OurValues />
                        <p className='constitutionText'>
                            For more information please <a href='constitution.pdf' target="_blank" className='constitutionLink'>click here</a> to view our constitution.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};