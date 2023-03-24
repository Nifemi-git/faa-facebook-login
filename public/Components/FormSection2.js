import React, { useEffect } from "react";
import { useState } from "react";

function FormSection2(props){

    let [days, setDays] = useState([""]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let [years, setYears] = useState([""]);

    let dayArr = [];
    let initial = 1;
    let final = 31;
    for(let i = initial; i <= final; i++){
        dayArr.push(i);
    }

    useEffect(() => {
        setDays([...dayArr]);
    }, []);

    let yearArr = [];
    let currentYear = new Date().getFullYear();
    let finalYear = 1970;
    for(let i = currentYear; i >= finalYear; i--){
        yearArr.push(i);
    }

    useEffect(() => {
        setYears([...yearArr]);
    }, []);

    const allDays = days.map((day) => (<option key={day.id}>{day}</option>));
    const allMonths =  months.map((month) => (<option key={month.id}>{month}</option>));
    const allYears = years.map((year) => (<option key={year.id}>{year}</option>));
    
    

    return(
        <div className="form-sectn2">
            <div>
                <p>Date of Birth</p>
                <div className="select-div">
                    <select className="selectElem" name="day of birth" onChange={props.func}>
                        {allDays}
                    </select>
                    <select className="selectElem" name="month of birth" onChange={props.func}>
                        {allMonths}
                    </select>
                    <select className="selectElem" name="Year of birth" onChange={props.func}>
                        {allYears}
                    </select>
                </div>
            </div>
            <div>
                <p>Gender</p>
                <div className="genders">
                    <div className="gender-option">
                        <label htmlFor="female">Female</label>
                        <input id="female" type="radio" name="gender" value="Female" onChange={props.func}/>
                    </div>
                    <div className="gender-option">
                        <label htmlFor="male">Male</label>
                        <input id="male" type="radio" name="gender" value="Male" onChange={props.func}/>
                    </div>
                    <div className="gender-option">
                        <label htmlFor="custom">Custom</label>
                        <input id="custom" type="radio" name="gender" value="Custom" onChange={props.func}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSection2;