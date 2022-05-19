import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default function Constitution() {
    return (
        <div>
            <Container>
                <h3 className='centerText'>Our Constitution</h3>
                <Row>
                    <Col>
                        The link to open a window to download the constitution.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        The viewer for the PDF
                    </Col>
                </Row>
            </Container>
        </div>
    );
};