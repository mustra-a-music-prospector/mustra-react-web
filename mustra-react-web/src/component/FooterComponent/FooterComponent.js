import React, { useState, useEffect } from "react";
import "./FooterComponent.css";
import black_full_logo from "img/black-full-logo.png";
import { Container } from "reactstrap";
const FooterComponent = () => {
    return (
        <div className="FooterComponent">
            <Container>
                <img src={black_full_logo}></img>
                <br />
                <br />
                <a href="https://www.22hours.online/">About Us</a>
            </Container>
        </div>
    );
};

export default FooterComponent;
