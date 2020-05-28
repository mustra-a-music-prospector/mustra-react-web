import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./Home.css";

// moudules
import PredictModule from "module/PredictModule/PredictModule";
import FeedList from "module/FeedList/FeedList";
const Home = ({ scrollToFeed, feed }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleScroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        // IE에서는 document.documentElement 를 사용.
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (scrollHeight - innerHeight - scrollTop < 10) {
            if (!isLoading) {
                console.log("Almost Bottom Of This Browser");
                setIsLoading(true);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [1]);

    return (
        <div className="Home">
            <div className="black-mask">
                <PredictModule scrollToFeed={scrollToFeed} />
            </div>
        </div>
    );
};

export default Home;
