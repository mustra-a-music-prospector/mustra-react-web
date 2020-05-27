import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./Home.css";

// moudules
import PredictModule from "module/PredictModule/PredictModule";

const Home = () => {
    return (
        <div className="Home">
            <PredictModule />
        </div>
    );
};

export default Home;
