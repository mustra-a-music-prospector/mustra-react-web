import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const PageRouter = (props) => {
    return (
        <div className="PageRouter">
            <Router>
                <div id="rt">
                    <Switch>
                        <NewHeaderComponent nickname={nickname} />
                    </Switch>
                    <div className="Article">
                        <ScrollToTop>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/howto" component={HowTo} />
                                <Route path="/emailCheck/:rand" component={EmailCheck} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" render={(props) => <Login logIn={logIn} {...props} />} />
                                <Route path="/logout" component={Logout} />
                                <Route path="/nickname" component={Nickname} />
                                <Route path="/issue" component={Issue} />
                                <Route path="/mdguide/:nickname" component={MdGuide} />
                                <Route path="/userinfo/:username" component={UserInfo} />
                                <AuthRoute path="/alarm" render={(props) => <Alarm {...props} />} />
                                <AuthRoute path="/newquestion" render={(props) => <NewQuestion {...props} />} />
                                <AuthRoute path="/mypage" render={(props) => <MyPage {...props} />} />
                                <Route path="/devnote" component={DevNote} />
                                <Route path="/sitesinfo/:infotype" component={SitesInfo} />
                                <Route path="/rule" component={Rule} />
                                <Route component={NotFound} />
                                <Route component={ServerError} />
                            </Switch>
                        </ScrollToTop>
                    </div>
                    <FooterModule />
                </div>
            </Router>
        </div>
    );
};

export default PageRouter;