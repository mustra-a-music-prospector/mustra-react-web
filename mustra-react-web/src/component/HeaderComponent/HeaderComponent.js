import React, { useState, useEffect } from "react";
import { Container, Collapse } from "reactstrap";
import mustra_logo_white from "img/mustraLogo/mustra_logo_white.png";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";

// icon
import MenuIcon from "@material-ui/icons/Menu";

const HeaderComponent = ({ location }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [clicked, setClicked] = useState("");

    useEffect(() => {
        setClicked(location.pathname.split("/")[1]);
    }, [location.pathname]);

    return (
        <div className="headercomponent">
            <Container className="header-wrapper pc-only">
                <div className="header-logo-col">
                    <Link to="/">
                        <img src={mustra_logo_white}></img>
                    </Link>
                </div>
                <div className="header-menu-col">
                    <div className="menu-wrapper">
                        <div className={"menu-box " + (clicked === "" ? "on" : "off")}>
                            <Link className="menu-item" to="/">
                                Home
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "feed" ? "on" : "off")}>
                            <Link className="menu-item" to="/feed">
                                Feed
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "contact" ? "on" : "off")}>
                            <Link className="menu-item" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="header-wrapper-mobile mobile-only">
                <div className="header-logo-col">
                    <Link to="/">
                        <img src={mustra_logo_white}></img>
                    </Link>
                </div>
                <div className="header-menu-col" onClick={() => toggle()}>
                    <MenuIcon style={{ fontSize: "35px", cursor: "pointer", color: "white", marginBottom: "2px" }} />
                </div>
            </Container>
            <Collapse isOpen={isOpen} className="mobile-only">
                <div className="collapse-wrapper">
                    <div className="collapse-item-wrapper">
                        <Link className="collapse-item" to="/" onClick={() => toggle()}>
                            Home
                        </Link>
                    </div>
                    <div className="collapse-item-wrapper">
                        <Link className="collapse-item" to="/feed" onClick={() => toggle()}>
                            Feed
                        </Link>
                    </div>
                    <div className="collapse-item-wrapper">
                        <Link className="collapse-item" to="/contact" onClick={() => toggle()}>
                            Contact
                        </Link>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default HeaderComponent;
