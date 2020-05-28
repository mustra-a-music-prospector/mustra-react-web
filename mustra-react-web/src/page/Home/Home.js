import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./Home.css";

// moudules
import PredictModule from "module/PredictModule/PredictModule";
import FeedList from "module/FeedList/FeedList";

const Home = ({ scrollToFeed }) => {
    return (
        <div className="Home">
            <div className="black-mask">
                <PredictModule scrollToFeed={scrollToFeed} />
            </div>
        </div>
    );
};

export default Home;
