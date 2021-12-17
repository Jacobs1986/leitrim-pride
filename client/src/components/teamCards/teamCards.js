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
                    <Col xs={12} md={4} className='cardColumns'>
                        <Card className='teamCards'>
                            <Card.Img variant="top" src="./Images/charley.jpeg" />
                            <Card.Body>
                                <Card.Title className="centerText cardTitle">
                                    Charley
                                </Card.Title>
                                <Card.Subtitle className="centerText cardMargins cardSubtitle">
                                    Title:
                                </Card.Subtitle>
                                <Card.Subtitle className="centerText cardSubtitle">
                                    Pronouns:
                                </Card.Subtitle>
                                <Card.Text className='cardText'>
                                    This is a test
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='teamCards'>
                            <Card.Img variant="top" src="./Images/charley.jpeg" />
                            <Card.Body>
                                <Card.Title className="centerText cardTitle">
                                    Charley
                                </Card.Title>
                                <Card.Subtitle className="centerText cardMargins cardSubtitle">
                                    Title:
                                </Card.Subtitle>
                                <Card.Subtitle className="centerText cardSubtitle">
                                    Pronouns:
                                </Card.Subtitle>
                                <Card.Text className='cardText'>
                                    This is a test
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};