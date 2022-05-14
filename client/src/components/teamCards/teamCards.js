import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

//Styling
import "./teamCards.css";

// team info
import teamInfo from './teaminfo.json';

export default function TeamCards() {
    return (
        <div>
            <h1 className="centerText">Meet Our Team</h1>
            <Container>
                <Row>
                    {teamInfo.map(person => (
                        <Col key={person.id} xs={12} md={6} lg={4} className='cardColumns'>
                            <Card className='teamCards'>
                                <Card.Img variant="top" src={require('./pride-flag-01.webp')} />
                                <Card.Body>
                                    <Card.Title className="centerText cardTitle">
                                        {person.name}
                                    </Card.Title>
                                    {person.title && <Card.Subtitle className="centerText cardMargins cardSubtitle">
                                        Title: {person.title}
                                    </Card.Subtitle>}
                                    <Card.Subtitle className="centerText cardSubtitle">
                                        Pronouns: {person.pronouns}
                                    </Card.Subtitle>
                                    <Card.Text className='cardText'>
                                        {person.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};