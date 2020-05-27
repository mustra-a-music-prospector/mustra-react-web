import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                                {/* <Route exact path="/" component={Home} />
                                <Route path="/howto" component={HowTo} />
                                <Route path="/emailCheck/:rand" component={EmailCheck} /> */}
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
