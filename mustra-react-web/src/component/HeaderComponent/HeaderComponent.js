import React, { useState, useEffect } from "react";
import { Container, Collapse } from "reactstrap";
import mustra_logo_white from "img/mustraLogo/mustra_logo_white.png";
import "./HeaderComponent.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="headercomponent">
            <Container className="header-wrapper pc-only">
                <div className="header-logo-col">
                    <a href="">
                        <img src={mustra_logo_white}></img>
                    </a>
                </div>
                <div className="header-menu-col">
                    <div className="menu-wrapper">
                        <div className="menu-box">
                            <a className="menu-item" href="">
                                Home
                            </a>
                        </div>
                        <div className="menu-box">
                            <a className="menu-item" href="#search">
                                Search
                            </a>
                        </div>
                        <div className="menu-box">
                            <a className="menu-item" href="#contact">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="header-wrapper-mobile mobile-only">
                <div className="header-logo-col">
                    <a href="">
                        <img src={mustra_logo_white}></img>
                    </a>
                </div>
                <div className="header-menu-col" onClick={() => toggle()}>
                    <MenuIcon style={{ fontSize: "35px", cursor: "pointer", color: "white", marginBottom: "2px" }} />
                </div>
            </Container>
            <Collapse isOpen={isOpen} className="mobile-only">
                <div className="collapse-wrapper">
                    <div className="collapse-item-wrapper">
                        <a className="collapse-item" href="" onClick={() => toggle()}>
                            Home
                        </a>
                    </div>
                    <div className="collapse-item-wrapper">
                        <a className="collapse-item" href="#search" onClick={() => toggle()}>
                            Search
                        </a>
                    </div>
                    <div className="collapse-item-wrapper">
                        <a className="collapse-item" href="#contact" onClick={() => toggle()}>
                            Contact
                        </a>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default HeaderComponent;
