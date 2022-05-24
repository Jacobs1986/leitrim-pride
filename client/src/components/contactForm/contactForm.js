// import React, { useRef } from "react";
import React, {
    useReducer,
    useState
} from 'react';

// Bootstrap
import {
    Button,
    Col,
    Form,
    Row
} from "react-bootstrap";
// import emailjs from "@emailjs/browser";

//Styling
import "./contactForm.css";

// API
// import { messages2 } from "../../utils/message-API";

// Reducer
import { reducer } from './functions';

export default function ContactForm() {
    // const form = useRef()
    const [messageInfo, setMessageInfo] = useReducer(reducer, {});
    const [nameCheck, setNameCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [subjectCheck, setSubjectCheck] = useState(false);
    const [messageCheck, setMessageCheck] = useState(false);

    const handleMessageInput = event => {
        setMessageInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    const handleSendMessage = (event) => {
        event.preventDefault();
        // Check to see if the name field is blank
        if (!messageInfo.from_name || messageInfo.from_name === "") {
            setNameCheck(true);
            return
        }
        if (!messageInfo.reply_to || messageInfo.reply_to === "") {
            setEmailCheck(true);
            return
        }
        if (!messageInfo.subject || messageInfo.subject === "---") {
            setSubjectCheck(true);
            return
        }
        if (!messageInfo.message || messageInfo.message === "") {
            setMessageCheck(true);
            return
        }
        alert('All the fields are filled in.')
        // console.log(messageInfo);
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
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Label>
                            Your Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="from_name"
                            value={messageInfo.from_name || ""}
                            onChange={handleMessageInput}
                        />
                        {!nameCheck ? <div></div> : <Form.Text className="errorCheck">Please enter a name.</Form.Text>}
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Label>
                            Your email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            name="reply_to"
                            value={messageInfo.reply_to || ""}
                            onChange={handleMessageInput}
                        />
                        {!emailCheck ? <div></div> : <Form.Text className="errorCheck">Please enter an email address.</Form.Text>}
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
                            value={messageInfo.subject}
                            onChange={handleMessageInput}
                        >
                            <option>---</option>
                            <option>Volunteer Opportunities</option>
                            <option>Event Questions</option>
                            <option>Kudos</option>
                        </Form.Control>
                        {!subjectCheck ? <div></div> : <Form.Text className="errorCheck">Please choose a subject.</Form.Text>}
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
                            value={messageInfo.message}
                            onChange={handleMessageInput}
                        />
                        {!messageCheck ? <div></div> : <Form.Text className="errorCheck">Please enter a message.</Form.Text>}
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