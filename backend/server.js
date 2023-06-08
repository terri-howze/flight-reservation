const express = require('express');
const {resolve} = require('path');
const routes = require("./routes");
const cors = require('cors');
const session = require('express-session');
require('dotenv').config;

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(routes);
app.use(cors());
// app.use(session({
//     secret: process.env.SECRET,//remember to actually make a secret in the .env
//     resave: false,
//     saveUninitialized: true
// }));

app.get('/', (req,res) => {
    //display page
    res.sendFile(resolve("./src/App.js"));
    
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});