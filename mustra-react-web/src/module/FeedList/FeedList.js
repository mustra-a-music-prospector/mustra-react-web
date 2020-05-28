import React, { useState, useEffect } from "react";
import "./FeedList.css";
import FeedItem from "item/FeedItem/FeedItem";
import { Container } from "reactstrap";

const FeedList = () => {
    return (
        <div className="FeedList">
            <Container>
                <FeedItem />
                <FeedItem />
            </Container>
        </div>
    );
};

export default FeedList;
