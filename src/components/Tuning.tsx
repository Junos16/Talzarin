import React from "react";
import { useState } from "react";

function TuningInput() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ()
    return (
        <div>
            <label>Enter cents for tuning</label>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </div>
    )
};

function TuningOutput() {

};

function Tuning() {
    return (
        <>
        <TuningInput></TuningInput>
        <TuningOutput></TuningOutput>
        </>
    )
};

export default Tuning;