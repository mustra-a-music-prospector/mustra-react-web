import React, { useState, useEffect } from "react";
import "./FeedItem.css";
import axios from "axios";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const FeedItem = () => {
    const getData = () => {};

    getData();
    return (
        <div className="FeedItem">
            <div className="feed-wrapper">
                <div className="stats-col">
                    <div className="stats-button">
                        <KeyboardArrowUpIcon />
                    </div>
                    <div className="stats-count">20</div>
                    <div className="stats-button">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="main-col"></div>
            </div>
        </div>
    );
};

export default FeedItem;
