import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./Home.css";

// moudules
import PredictModule from "module/PredictModule/PredictModule";
import FeedList from "module/FeedList/FeedList";

const Home = ({ feed }) => {
    return (
        <div className="Home">
            <div className="black-mask">
                <PredictModule />
            </div>
        </div>
    );
};

export default Home;
