import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default function Mission() {
    return (
        <div>
            <h3 className='centerText'>Our Mission and Values</h3>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam turpis, imperdiet ac gravida non, tempus eu turpis. Morbi aliquam aliquam dignissim. In tristique sodales mattis. Sed quis tortor aliquet nulla tincidunt blandit. Maecenas felis libero, laoreet nec odio nec, pretium fringilla ipsum. Sed condimentum elit dolor, quis fringilla mauris fringilla vitae. Maecenas pulvinar imperdiet sagittis. Praesent dignissim, metus nec egestas porttitor, nisl metus consequat sapien, eget mattis tortor tortor quis ex. Aenean tempor nec ante ac porta. Praesent dictum nunc et odio fringilla, a auctor risus sodales.
                        </p>
                        <p>
                            Donec nec justo quis eros pharetra fermentum at in justo. Cras pharetra sem volutpat, aliquam orci vel, blandit ex. Morbi congue diam sed ante vestibulum, vitae molestie ipsum lobortis. Praesent semper est nec neque tempor, ornare porttitor erat mollis. Nunc gravida molestie ante. Integer suscipit consequat ornare. Quisque laoreet augue id hendrerit posuere. Cras finibus urna sed purus mollis, ac venenatis risus finibus. Nulla nec eros sem. Proin dui mauris, convallis et lacus id, ullamcorper lacinia ex. Sed commodo arcu eget magna placerat, a ullamcorper dolor viverra. Vivamus placerat, mauris sit amet mollis lobortis, urna diam efficitur ligula, at tempor diam eros nec neque. Fusce pharetra facilisis nibh, nec eleifend enim sollicitudin at. Aenean vitae ligula ullamcorper, convallis dolor ut, mollis nunc. Nunc malesuada eget libero vel rhoncus.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>To view our constitution click <a href='constitution.pdf' target='_blank'>here</a>.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};