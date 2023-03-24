import React from "react";

function FormSection1(props){
    return(
        <div className="form-sectn1">

            <div id="names-text-input">
                <input
                    className="input"
                    type="text"
                    placeholder="First name"
                    name="first name"
                    id="firstname"
                    onChange={props.func}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    id="surname"
                    onChange={props.func}
                />            
            </div>
            
            <input
            className="input"
            placeholder="Mobile number or email address"
            name="number/email"
            id="email"
            onChange={props.func}
            />
            <input
            className="input"
            type="password"
            placeholder="New password"
            name="new password"
            id="pass"
            onChange={props.func}
            />
      </div>
    );
}

export default FormSection1;