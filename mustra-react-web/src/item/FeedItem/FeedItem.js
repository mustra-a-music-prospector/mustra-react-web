import React, { useState, useEffect } from "react";
import "./FeedItem.css";
import axios from "axios";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChatIcon from "@material-ui/icons/Chat";
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
                <div className="main-col">
                    <div className="data-col">
                        <div className="rank-row">
                            <div id="item-name">랭크</div>
                            <div id="item-value">A</div>
                        </div>
                        <div className="singer-row">
                            <span id="item-name">가수</span>
                            <div id="item-value">아이유</div>
                        </div>
                        <div className="song-row">
                            <span id="item-name">곡</span>
                            <div id="item-value">너의 의미</div>
                        </div>
                    </div>
                    <div className="comment-col">
                        <span id="item-name">
                            <ChatIcon />
                        </span>
                        <span id="item-value">"A 받을만한 노래 같아요."</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedItem;
