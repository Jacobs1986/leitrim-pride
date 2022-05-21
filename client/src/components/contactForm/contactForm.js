// import React, { useRef } from "react";
import React, {
    useReducer
} from 'react';
import { 
    Button, 
    Col, 
    Form, 
    Row } from "react-bootstrap";
// import emailjs from "@emailjs/browser";

//Styling
import "./contactForm.css";

// API
// import { messages2 } from "../../utils/message-API";

// Reducer
function reducer(state, event) {
    if (event.reset) {
        state = {}
        return state
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function ContactForm() {
    // const form = useRef()
    const [messageInfo, setMessageInfo] = useReducer(reducer, {})

    const handleSendMessage = (event) => {
        event.preventDefault();

        // Send the message
        // emailjs.sendForm('service_rzc3jxe', 'template_32kveqk', form.current, 'hjTQGHelMqEMMP7I-')
        //     .then((results) => {
        //         console.log(results)
        //         alert('Thank you for your message! We\'ll get back to you ASAP!')
        //     }, (error) => {
        //         console.log(error.text)
        //     })
    }

    return (
        <div id="contactDiv">
            <Form onSubmit={handleSendMessage}>

            </Form>
            {/* <Form ref={form} onSubmit={handleSendMessage}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Label>
                            Your Name
                        </Form.Label>
                        <Form.Control
                            name="from_name"
                        />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Label>
                            Your email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            name="reply_to"
                        />
                    </Col>
                </Row>
                <Row>
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
                            <option>Event Questions</option>
                            <option>Kudos</option>
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
                <Row style={{ paddingTop: '1em' }}>
                    <Col>
                        <Button
                            variant='primary'
                            type='submit'
                        >
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form> */}
        </div>
    );
};