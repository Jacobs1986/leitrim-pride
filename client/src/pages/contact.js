import React from "react";

// Styling
import { Container  } from "react-bootstrap";

// Components
import ContactForm from "../components/contactForm/contactForm";
import ContactText from "../components/contactText/contactText";

export default function Contact() {
    return (
        <div>
            <Container>
                <ContactText />
                <ContactForm />
            </Container>
        </div>
    );
};