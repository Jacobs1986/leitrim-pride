import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

//Styling
import "./contactForm.css";

// API
// import { messages2 } from "../../utils/message-API";

export default function ContactForm() {
    const form = useRef()

    const handleSendMessage = (event) => {
        event.preventDefault();
        console.log(form.current);
    } 

    return (
        <div id="contactDiv">
            <Form ref={form} onSubmit={handleSendMessage}>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Label>
                            Your Name
                        </Form.Label>
                        <Form.Control 
                            name="from_name"
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Label>
                            Your email
                        </Form.Label>
                        <Form.Control 
                            type="email"
                            name="reply_to"
                        />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Form.Label>
                            Subject
                        </Form.Label>
                        <Form.Control
                            name="subject" 
                            as='select'
                            defaultValue="---"
                        >
                            <option>---</option>
                            <option>Volunteer Opportunities</option>
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
                            name="message"
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