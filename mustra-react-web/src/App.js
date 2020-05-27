import React, { useState, useEffect } from "react";
import "./App.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ReplyModule from "module/ReplyModule/ReplyModule";
const App = () => {
    return (
        <div className="App">
            hello react
            <ReplyModule />
            <AcUnitIcon />
        </div>
    );
};

export default App;
