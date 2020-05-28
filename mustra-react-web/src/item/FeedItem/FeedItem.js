import React, { useState, useEffect } from "react";
import "./FeedItem.css";
import axios from "axios";
import jQuery from "jquery";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const FeedItem = () => {
    window.$ = window.jQuery = jQuery;
    const getData = () => {
        window.$.ajax({
            url:
                "https://www.google.com/search?q=%EA%B5%AC%EA%B8%80&oq=%EA%B5%AC%EA%B8%80&aqs=chrome..69i57j69i59j0l2j69i61l3j69i65.1466j0j7&sourceid=chrome&ie=UTF-8",
            dataType: "jsonp",
            jsonpCallback: "myCallback",
            success: function (data) {
                console.log("성공 - ", data);
            },
            error: function (xhr) {
                console.log("실패 - ", xhr);
            },
        });
    };

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
