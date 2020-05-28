import React, { useState, useEffect } from "react";
import "./Feed.css";
import { Container } from "reactstrap";
import FeedList from "module/FeedList/FeedList";
const Feed = () => {
    return (
        <div className="Feed">
            <div className="black-mask">
                <Container>
                    <FeedList />
                </Container>
            </div>
        </div>
    );
};

export default Feed;
