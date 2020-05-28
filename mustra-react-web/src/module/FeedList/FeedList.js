import React, { useState, useEffect } from "react";
import "./FeedList.css";
import FeedItem from "item/FeedItem/FeedItem";

const FeedList = () => {
    return (
        <div className="FeedList">
            <FeedItem />
            <FeedItem />
        </div>
    );
};

export default FeedList;
