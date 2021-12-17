import React from "react";

// Styling
import { Col, Container, Row } from "react-bootstrap";

// Components
import ContactForm from "../components/contactForm/contactForm";

export default function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        We love hearing from you. Please send us a message!
                    </Col>
                </Row>
                <ContactForm />
            </Container>
        </div>
    );
};