import React, { useState, useEffect } from "react";
import { Container, Collapse } from "reactstrap";
import mustra_logo_white from "img/mustraLogo/mustra_logo_white.png";
import mustra_logo_black from "img/mustraLogo/mustra_logo_black.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";

import "./HeaderComponent.css";

const HeaderComponent = ({ scrollToFeed, scrollToTop }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [clicked, setClicked] = useState("");
    const contactToggle = () => setContactOpen(!contactOpen);
    const [userEmail, setUserEmail] = useState("");

    const btnClick = ({ userEmail }) => {
        if (userEmail === "") {
            alert("이메일을 입력해주세요.");
        } else {
            contactToggle();
            window.open("mailto:king199777@gmail.com");
        }
    };
    // useEffect(() => {
    //     setClicked(location.pathname.split("/")[1]);
    // }, [location.pathname]);

    return (
        <div className="headercomponent">
            <Container className="header-wrapper">
                <div className="header-logo-col">
                    <span to="/">
                        <img src={mustra_logo_white}></img>
                    </span>
                </div>
                <div className="header-menu-col">
                    <div className="menu-wrapper">
                        <div className={"menu-box " + (clicked === "" ? "on" : "off")}>
                            <span className="menu-item" onClick={() => scrollToTop()}>
                                Home
                            </span>
                        </div>
                        <div className={"menu-box " + (clicked === "feed" ? "on" : "off")}>
                            <span className="menu-item" onClick={() => scrollToFeed()}>
                                Feed
                            </span>
                        </div>
                        <div className={"menu-box " + (clicked === "contact" ? "on" : "off")}>
                            <span className="menu-item" onClick={() => contactToggle()}>
                                Contact
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <Modal isOpen={contactOpen} toggle={contactToggle}>
                <ModalHeader toggle={contactToggle} style={{ borderBottom: "none" }}>
                    Contact Us
                </ModalHeader>
                <ModalBody>
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                        <img src={mustra_logo_black}></img>
                    </div>
                    <div className="modal-body-text" style={{ marginBottom: "15px" }}>
                        Send to <b>king199777@gmail.com</b>
                    </div>
                    <div className="modal-body-email">
                        <Input
                            value={userEmail}
                            onChange={({ target: { value } }) => setUserEmail(value)}
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="write your email"
                        />
                    </div>
                </ModalBody>
                <ModalFooter style={{ borderTop: "none" }}>
                    <Button
                        color="secondary"
                        onClick={() => btnClick({ userEmail })}
                        style={{ fontSize: "15px", borderTop: "none", marginTop: "5px" }}
                    >
                        Send
                    </Button>{" "}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default HeaderComponent;
