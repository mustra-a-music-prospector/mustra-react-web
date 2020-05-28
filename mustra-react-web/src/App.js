import React, { useState, useEffect } from "react";
import "./App.css";
import PageRouter from "PageRouter";
import HeaderComponent from "component/HeaderComponent/HeaderComponent";

const App = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <PageRouter />
        </div>
    );
};

export default App;
