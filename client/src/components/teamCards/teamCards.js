import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

//Styling
import "./teamCards.css";

// team info
import teamInfo from './teaminfo.json';

export default function TeamCards() {
    return (
        <div>
            <h1 className="centerText">Meet Our Team</h1>
            <Container>
                {teamInfo.map(person => (
                    <div>
                        {!person.text ? <Row></Row> :
                            <Row key={person.id} className='bioRow'>
                            <Col md={4}>
                                {!person.image ?
                                    <Image src={require('./pride-flag-01.webp')} alt='Pride Flag' fluid />
                                    :
                                    <Image src={require(`./${person.image}`)} alt={`${person.name} Headshot`} fluid />
                                }
                                <div className="centerText">
                                    <h2>{person.name}</h2>
                                    <h4>Title: {person.title}</h4>
                                    <h4>Pronouns: {person.pronouns}</h4>
                                </div>
                            </Col>
                            <Col md={8}>
                                {person.text.split("\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                            </Col>
                        </Row>}
                    </div>
                ))}
                {/* <Row>
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
                </Row> */}
            </Container>
        </div>
    );
};