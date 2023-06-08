const jwt = require('jsonwebtoken');

function authToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(toekn == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET, (err,user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
    //return true;
}

module.exports = authToken;