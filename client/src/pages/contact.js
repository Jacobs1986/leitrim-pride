import React from "react";

// Styling
import { Container  } from "react-bootstrap";

// CSS File
import './css/contact.css';

// Components
import ContactForm from "../components/contactForm/contactForm";
import ContactText from "../components/contactText/contactText";

export default function Contact() {
    return (
        <div className='contactDiv'>
            <Container>
                <ContactText />
                <ContactForm />
            </Container>
        </div>
    );
};