import React from "react";

// CSS File
import "./constructionPage.css";

// Bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

export default function ConstructionPage() {
    return (
        <div className='constructionDiv'>
            <Container>
                <Row>
                    <Col xs={12} sm={12}>
                        <Image 
                            src={require('./under-construction.jpeg')}
                            alt='Contruction Sign'
                            className="constructionSignImage"
                        />
                    </Col>
                    <Col xs={12} sm={12}>
                        <p className="centerText constructionText">
                            We are hard at work creating content for this page. Come back soon to see the update!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};