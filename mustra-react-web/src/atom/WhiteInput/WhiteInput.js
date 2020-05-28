import React, { useState, useEffect } from "react";
import "./WhiteInput.css";
import { Input } from "reactstrap";
const WhiteInput = ({ hint, value, setValue, onEnter, setNextAble }) => {
    const EnterKey = (e) => {
        if (e.key === "Enter") {
            var text = document.getElementById("input1").value;
            if (text.length > 1) {
                onEnter();
            } else {
                alert("2글자 이상 입력하세요");
            }
        }
    };
    const handleChange = (value) => {
        setValue(value);
        var text = document.getElementById("input1").value;
        if (text.length > 1) {
            setNextAble(true);
        } else {
            setNextAble(false);
        }
    };
    return (
        <div className="WhiteInput">
            <Input
                onKeyPress={EnterKey}
                value={value}
                onChange={({ target: { value } }) => handleChange(value)}
                type="text"
                id="input1"
                placeholder={hint}
            />
        </div>
    );
};

export default WhiteInput;
