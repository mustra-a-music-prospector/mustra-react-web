import React, { useState, useEffect } from "react";
import { Container, Collapse } from "reactstrap";
import mustra_logo_white from "img/mustraLogo/mustra_logo_white.png";
import "./HeaderComponent.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";

const HeaderComponent = ({ scrollToFeed, scrollToTop }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [clicked, setClicked] = useState("");

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
                            <span className="menu-item">Contact</span>
                        </div>
                    </div>
                </div>
            </Container>

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
