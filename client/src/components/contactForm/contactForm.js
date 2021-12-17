import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

//Styling
// import "./contactForm.css";

export default function ContactForm() {
    return (
        <div id="contactDiv">
            <Form>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Label>
                            Your Name
                        </Form.Label>
                        <Form.Control />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Label>
                            Your email
                        </Form.Label>
                        <Form.Control />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Form.Label>
                            Subject
                        </Form.Label>
                        <Form.Control 
                            as='select'
                            defaultValue="---"
                        >
                            <option>---</option>
                            <option>Volunteer Oppertunities</option>
                            <option>Events</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Label>
                            Write us a message!
                        </Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows='6'
                        />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '1em'}}>
                    <Col>
                        <Button
                            variant='primary'
                            type='submit'
                        >
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};