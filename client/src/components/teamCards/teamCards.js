import React from "react";
import { Card, Container } from "react-bootstrap";

//Styling
import "./teamCards.css";

export default function TeamCards() {
    return (
        <div>
            <h1 className="centerText">Meet Our Team</h1>
            <Container>
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
                        <Card.Text>
                            This is a test
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};