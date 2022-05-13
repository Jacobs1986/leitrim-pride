import React from "react";

// CSS File
import "./homePageLit.css";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default function HomePageLit() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>Leitrim Pride seeks to bring together individuals and organisations to empower, educate and support the Leitrim LGBTQI+ community through the production of an annual community LGBTQI+ Pride Festival and events throughout the year.</p>

                        <p>Leitrim Pride envisions a unified community where diverse individuals are celebrated and are able to thrive as their authentic selves.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};