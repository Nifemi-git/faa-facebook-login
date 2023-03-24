import React from "react";
import {BsX} from "react-icons/bs"

function Header () {
    return(
        <>
            <div className="signUp--head">
                <div className="signUp--head-text">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy</p>
                </div>

                <div className="signUp-head-x">
                    <BsX id="icon"/>
                </div>
            </div>
            <div id="hr">
                <hr id="horizontal-rl"/>
            </div>
        </>
    );
}

export default Header;