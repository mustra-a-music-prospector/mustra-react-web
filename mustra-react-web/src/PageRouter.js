import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "page/Home/Home";
import Feed from "page/Feed/Feed";
import ScrollToTop from "util/ScrollToTop";
const PageRouter = (props) => {
    return (
        <div className="PageRouter">
            <Router>
                <div id="rt">
                    <Switch>{/* <NewHeaderComponent nickname={nickname} /> */}</Switch>
                    <div className="Article">
                        <ScrollToTop>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/feed" component={Feed} />
                            </Switch>
                        </ScrollToTop>
                    </div>
                    {/* <FooterModule /> */}
                </div>
            </Router>
        </div>
    );
};

export default PageRouter;
