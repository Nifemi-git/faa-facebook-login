import React from "react";

function Button(props){
    return(
        <div className="signUp--btn">
            <button form={props.form} onClick={props.func} >{props.text}</button>
        </div>
    );
}

export default Button;