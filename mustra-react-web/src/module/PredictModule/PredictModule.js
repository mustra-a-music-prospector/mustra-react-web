import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./PredictModule.css";
const PredictModule = () => {
    return (
        <div className="PredictModule">
            <div className="black-mask">
                <Container>
                    <div className="header-row"></div>
                    <div className="header-row">This is Header</div>
                </Container>
            </div>
        </div>
    );
};

export default PredictModule;
