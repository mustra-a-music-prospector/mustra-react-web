import React, { useState, useEffect } from "react";
import "./FeedItem.css";
import axios from "axios";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChatIcon from "@material-ui/icons/Chat";
import { timeForToday, getTimeStamp } from "time";
const FeedItem = (props) => {
    const { _id, artistName, songName, rank, comment, likeCount, date } = props;
    const getData = () => {};
    getData();
    return (
        <div className="FeedItem">
            <div className="item-wrapper">
                <div className="stats-col">
                    <div id="up">
                        <KeyboardArrowUpIcon />
                    </div>
                    <div>{likeCount}</div>
                    <div id="down">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="main-col">
                    <div className="info-row">
                        <span id="rank" className={rank}>
                            {rank}
                        </span>
                        &nbsp; &nbsp;
                        <span id="artist">
                            {artistName} - {songName}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span id="date">{timeForToday(date)}</span>
                    </div>
                    <div className="content-row">{comment}</div>
                </div>
            </div>
        </div>
    );
};

export default FeedItem;
