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
                        <Card.Title className="centerText">
                            Charley
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};