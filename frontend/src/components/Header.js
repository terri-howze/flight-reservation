import { useState, useEffect } from 'react';
import React, { Component } from "react";
import Axios from 'axios';
import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';
import { typography } from '@mui/system';



const Header = () => {
    const handleClick= e => {
    Axios
        .get('http://localhost:8085/flights', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    
    }

    return(
        <div>
        <AppBar position="fixed">
            
            KayTravdia
            
        </AppBar>


        <button onClick={handleClick}>
        Sign Up
        </button>
        </div>
    )
}
export default Header