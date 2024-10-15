const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
    const authHead = req.headers['authorization'];
    const token = authHead && authHead.startsWith("Bearer ") ? authHead.split(" ")[1] : null;

    if(!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user) => {
        if(err) return res.sendStatus(401);
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken
};