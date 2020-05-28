import React, { useState, useEffect } from "react";
import { Container, Collapse } from "reactstrap";
import mustra_logo_white from "img/mustraLogo/mustra_logo_white.png";
import mustra_logo_black from "img/mustraLogo/mustra_logo_black.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";

import "./HeaderComponent.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";

const HeaderComponent = ({ scrollToFeed, scrollToTop }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [clicked, setClicked] = useState("");
    const contactToggle = () => setContactOpen(!contactOpen);
    const [userEmail, setUserEmail] = useState("");

    const btnClick = () => {
        contactToggle();
        window.open("mailto:king199777@gmail.com");
    };
    // useEffect(() => {
    //     setClicked(location.pathname.split("/")[1]);
    // }, [location.pathname]);

    return (
        <div className="headercomponent">
            <Container className="header-wrapper pc-only">
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
                        onClick={btnClick}
                        style={{ fontSize: "15px", borderTop: "none", marginTop: "5px" }}
                    >
                        Send
                    </Button>{" "}
                </ModalFooter>
            </Modal>
            <Container className="header-wrapper-mobile mobile-only">
                <div className="header-logo-col">
                    <span to="/">
                        <img src={mustra_logo_white}></img>
                    </span>
                </div>
                <div className="header-menu-col" onClick={() => toggle()}>
                    <MenuIcon style={{ fontSize: "35px", cursor: "pointer", color: "white", marginBottom: "2px" }} />
                </div>
            </Container>
            <Collapse isOpen={isOpen} className="mobile-only">
                <div className="collapse-wrapper">
                    <div className="collapse-item-wrapper">
                        <span className="collapse-item" to="/" onClick={() => toggle()}>
                            Home
                        </span>
                    </div>
                    <div className="collapse-item-wrapper">
                        <span className="collapse-item" to="/feed" onClick={() => toggle()}>
                            Feed
                        </span>
                    </div>
                    <div className="collapse-item-wrapper">
                        <span className="collapse-item" to="/contact" onClick={() => toggle()}>
                            Contact
                        </span>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default HeaderComponent;
