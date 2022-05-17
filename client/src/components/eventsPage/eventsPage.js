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
                            className='comingSoonImage'
                        />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <p className='eventsComingSoonText'>
                            We have some exciting events coming soon. Check back later to find out what they are!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};