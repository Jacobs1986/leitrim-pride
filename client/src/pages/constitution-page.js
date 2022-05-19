import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

// Components
import ConstitutionViewer from "../components/constitutionViewer/constitutionViewer";

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
                        <ConstitutionViewer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};