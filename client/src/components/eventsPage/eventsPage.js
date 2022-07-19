import React from "react";

// CSS File
import "./eventsPage.css";

// Bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

export default function EventsPage() {
    return (
        <div className='eventsDiv'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Image 
                            src='./Images/Coming-Soon-PNG-Image.png'
                            alt='Coming Soon sign'
                            className='comingSoonImage eventsComingSoon'
                        />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <h1 className="centerText">Leitrim Pride 2022</h1>
                        <h3 className="centerText">Monday 15th August - Sunday 21st August</h3>
                        <h3 className="centerText">Leitrim Pride Parade - Carrick on Shannon</h3>
                        <h5 className="centerText">Saturday 20th August, gathering starts at 1pm, parade beings at 2pm</h5>
                        <h3 className="centerText">Check back for more exciting events!!</h3>
                        {/* <p className='eventsComingSoonText'>
                            We have some exciting events coming soon. Check back later to find out what they are!
                        </p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};