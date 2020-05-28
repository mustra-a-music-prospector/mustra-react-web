import React, { useState, useEffect } from "react";
import "./FeedLoader.css";
import { Spinner } from "reactstrap";
const FeedLoader = () => {
    return (
        <div className="FeedLoader">
            Now Loading...
            <br />
            <br />
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="dark" />
        </div>
    );
};

export default FeedLoader;
