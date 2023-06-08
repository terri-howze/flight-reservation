require('dotenv').config();
const router = require('express').Router();
const express = require('express');
const {resolve} = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
//const {authToken} = require('../../token/token');
const {createUser, login, getUser, getReservation, makeRes, deleteRes} = require('../../controller/api-controller');

router.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
router.use(cookieParser());
router.use(express.json());

router.post('/', (req,res)=>{
    createUser(req);
    res.status(201).json('Create User success!');
});

router.post('/login', async (req,res)=>{
    let logStatus = await login(req);
    const username = req.body.username;
    const user = {name: username};
    const accessToken = jwt.sign(user, process.env.SECRET, {expiresIn: '60min'})
    console.log(accessToken);
    if(logStatus === true){
        res.status(201).json({name:user.name, accessToken});
    }
    else{
        res.status(409).json(logStatus);
    }  
});

router.post('/reserve', authToken, async(req,res)=>{
    const reserve = await getReservation(req);
    res.status(200).json(reserve);
});

router.get('/info',authToken,async (req,res)=>{
    const User = await getUser(req);
    res.status(200).json(User);
});

router.put('/makeres', authToken, async(req,res)=>{
    try{
        await makeRes(req);
        res.status(201).json('reservation added');
    }catch(err){
        res.status(500).json(err);
    }
});

router.delete('/deleteres', authToken, async(req,res)=>{
    try{
        await deleteRes(req);
        res.status(201).json('reservation canceled');
    }catch(err){
        res.status(500).json(err);
    }
});

function authToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET, (err,user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
    //return true;
}

module.exports = router;