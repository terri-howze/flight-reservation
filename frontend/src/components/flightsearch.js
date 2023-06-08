import { useState, useEffect } from 'react';
import React, { Component } from "react";
import Axios from 'axios';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import format from 'date-fns/format';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';

const Flightsearch = () => {
    
    const [departure, setwherefrom] = useState("");
    const [destination, setwhereto] = useState("");
    const [leaveDate, setDeparture] = useState("");
    const [dateReturn, setReturn] = useState("");
    const [flights, setFlights] = useState("");


    // changes wherefrom to location user wants to depar from
    const dep = e =>{
        setwherefrom(e.target.value);
    };
     // changes  state of whereto to where user wants to go
    const dest = e =>{
        setwhereto(e.target.value);
    };


const handleSubmit = e => {
    e.preventDefault();
    const departureDate = format(leaveDate, "yyyy-MM-dd");
    const returnDate = format(dateReturn, "yyyy-MM-dd");
    // useEffect(() => {
    //     (async () => {
    //         const {data} = Axios.post('http://localhost:8085/flight/',{departure, destination, departureDate, returnDate})
    //         setFlights(data);
    //     })
    //     },[])
    const data = {departure, destination, departureDate, returnDate};
    console.log(data);
        };

return(
        
        <div>
        <AppBar position="fixed" color="secondary">
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            KayTravdia
            </Typography>
            <Button color="inherit">Reservations</Button>
        </AppBar>
            <h1>Flight Search</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="filled-basic" label="From" variant="filled"
                type= "text"
                onChange = {dep} 
                />

            <TextField id="filled-basic" label="To" variant="filled"
                type = "text"
                onChange = {dest}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date Leaving"
                value={departureDate}
                onChange={(newValue) => {
                setDeparture(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
                label="Date Return"
                value={returnDate}
                onChange={(newValue) => {
                setReturn(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <button type="submit">Sign Up</button>
            </form>

        </div>
    )
    
}

export default Flightsearch