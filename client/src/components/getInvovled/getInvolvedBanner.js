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

export default function GetInvolvedBanner() {
    return (
        <div>
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
        </div>
    );
};