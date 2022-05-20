import React from "react";

// CSS File
import "./getInvolved.css";

// Bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

// Components
import JoinTheTeam from "./joinTheTeam";
import VolunteeringOffer from "./volunteeringOffers";
import VolunteeringRoles from "./volunteeringRoles";
import TimeCommitment from "./timeCommitment";

export default function GetInvovledComp() {
    return (
        <div>
            <h2 className="centerText">Get Involved</h2>
            <Container fluid style={{ marginBottom: '5px', padding: '0px' }}>
                <Row>
                    <Col>
                        <Image
                            src={require('./get-involved-banner.jpg')}
                            alt='Page banner'
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <JoinTheTeam />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <VolunteeringOffer />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <VolunteeringRoles />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TimeCommitment />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};