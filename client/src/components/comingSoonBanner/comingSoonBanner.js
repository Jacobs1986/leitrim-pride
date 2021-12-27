import React from "react";

//Styling
import "./comingSoonBanner.css";

// Bootstrap
import { Col, Container, Row } from "react-bootstrap";

export default function ComingSoonBanner() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} className="centerText">
                        COMING SOON!
                    </Col>
                </Row>
            </Container>
        </div>
    );
};