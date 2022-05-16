import React from "react";

// CSS File
import "./footer.css";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className="centerText">
            <Container>
                <Row>
                    <Col lg={4}>
                        Column 1
                    </Col>
                    <Col lg={4}>
                        Column 2
                    </Col>
                    <Col lg={4}>
                        Column 3
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};