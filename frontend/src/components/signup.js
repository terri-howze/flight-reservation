import { useState, useEffect } from 'react';
import React, { Component } from "react";
import Axios from 'axios';


const signUp = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    // changes name state to new state input
    const onNewUser = e =>{
        setusername(e.target.value);
    };
     // changes password state to new state input
    const onNewPassword = e =>{
        setpassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
           username
           //password
        };
        
        Axios
            .post('http://localhost:8085/users/', data)
            .then( res => console.log(res.data))
            .catch(err => console.log(err));
            console.log(data);
    };

return(
        <div>
            <form onSubmit={handleSubmit}>
            <label> Enter your username
                <input
                type= "text"
                onChange = {onNewUser} 
                />
            </label>
            <label>Enter you password
            <input
                type = "password"
                onChange = {onNewPassword}
                />
            </label>
            <button type="submit">Sign Up</button>
            </form>

        </div>
    )
    
}

export default signUp