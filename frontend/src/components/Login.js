import { useState, useEffect } from 'react';
import React, { Component } from "react";
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';

const Login = () => {

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
           username,
           password
        };
        
        Axios
            .post('http://localhost:8085/users/login', data)
            .then( )
            .catch(err => console.log(err));
    };

return(
    <div>
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            KayTravdia
            </Typography>
        </Toolbar>
        </AppBar>
            
        <div className="login-box">
            
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <TextField id="filled-basic" label="Username" variant="filled" fullWidth
                type="text"
                onChange = {onNewUser} 
            />

            <TextField id="filled-basic" label="Password" variant="filled" fullWidth
                type="password"
                onChange = {onNewPassword}
            />
            <Button type="submit" fullWidth>Login</Button>
            </form>

        </div>
        </div>
    )
    
}

export default Login