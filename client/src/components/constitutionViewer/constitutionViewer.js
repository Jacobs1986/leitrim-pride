import React from "react";

// CSS File
import "./constitutionViewer.css";

// Bootstrap
import {
    Ratio
} from 'react-bootstrap';

export default function ConstitutionViewer() {
    return (
        <div>
            <Ratio aspectRatio="1x1">
                <embed
                    src='./constitution.pdf'
                    title='Leitrim Pride Constitution'
                    width='100%'
                    height='100%'
                />
            </Ratio>
        </div>
    );
};