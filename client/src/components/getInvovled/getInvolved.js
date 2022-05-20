import React from "react";

// CSS File
import "./getInvolved.css";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

// Components
import JoinTheTeam from "./joinTheTeam";
import VolunteeringOffer from "./volunteeringOffers";
import VolunteeringRoles from "./volunteeringRoles";
import TimeCommitment from "./timeCommitment";
import GetInvolvedBanner from "./getInvolvedBanner";

export default function GetInvovledComp() {
    return (
        <div>
            <h2 className="centerText">Get Involved</h2>
            <GetInvolvedBanner />
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