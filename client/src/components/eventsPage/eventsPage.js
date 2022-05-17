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
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image 
                            src='./Images/Coming-Soon-PNG-Image.png'
                            alt='Coming Soon sign'
                        />
                    </Col>
                    <Col md={6}>
                        <p className='eventsComingSoonText'>
                            We have some exciting events coming soon. Check back later to find out what they are!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};