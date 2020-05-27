import React, { useState, useEffect } from "react";
import "./WhiteInput.css";
const WhiteInput = ({ hint, value, setValue }) => {
    return (
        <div className="WhiteInput">
            <div className="input">
                <div
                    html={value}
                    className="inner"
                    onInput={(e) => setValue(e.currentTarget.textContent)}
                    contentEditable="true"
                    placeholder={hint}
                ></div>
            </div>
        </div>
    );
};

export default WhiteInput;
