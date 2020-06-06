import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "page/Home/Home";
import Feed from "page/Feed/Feed";
import ScrollToTop from "util/ScrollToTop";
import HeaderComponent from "component/HeaderComponent/HeaderComponent";
import FooterComponent from "component/FooterComponent/FooterComponent";
import FeedList from "module/FeedList/FeedList";
const PageRouter = () => {
    const [feed, setFeed] = useState(false);
    const toggleFeed = () => setFeed(!feed);
    const scrollToTop = () => {
        var body = document.getElementsByTagName("body")[0];
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: body.offsetTop,
        });
    };
    const scrollToFeed = () => {
        var feed = document.querySelector("#feed").offsetTop;
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: feed,
        });
    };
    return (
        <div className="PageRouter">
            <div id="rt">
                <HeaderComponent scrollToTop={scrollToTop} scrollToFeed={scrollToFeed} />
                <div className="Article">
                    <div id="home">
                        <Home feed={true} scrollToFeed={scrollToFeed} />
                    </div>
                    <div id="feed">
                        <FeedList feed={true} />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div>
    );
};

export default PageRouter;
