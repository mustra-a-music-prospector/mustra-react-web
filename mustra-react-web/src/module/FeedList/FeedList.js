import React, { useState, useEffect } from "react";
import "./FeedList.css";
import FeedItem from "item/FeedItem/FeedItem";
import { Container } from "reactstrap";
import FeedLoader from "atom/FeedLoader/FeedLoader";
import { GET, FIND_ALL_FEED } from "rest";
const FeedList = () => {
    const [item, setItem] = useState();
    const getData = async () => {
        const data = await GET(FIND_ALL_FEED);
        if (data) {
            console.log(data);
            setItem(data.map((it) => <FeedItem key={it._id} {...it} />));
        }
    };
    useEffect(() => {
        getData();
    }, [1]);
    if (item) {
        return (
            <div className="FeedList">
                <Container>
                    <div className="feed-header">Feed</div>
                    {item}
                    {/* <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem /> */}
                </Container>
            </div>
        );
    } else {
        return (
            <div className="FeedList">
                <FeedLoader />
            </div>
        );
    }
};

export default FeedList;
