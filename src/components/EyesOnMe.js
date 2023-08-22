// Code EyesOnMe Component Here
import React from "react";

function CodeEyesOnMe() {

    function buttonOnFocusHandler() {
        console.log("Good!");
    }

    function buttonOnBlurHandler() {
        console.log("Hey! Eyes on me!");
    }

    
    return (
        <button onFocus={buttonOnFocusHandler} onBlur={buttonOnBlurHandler}>Eyes on me</button>
    );
}

export default CodeEyesOnMe;