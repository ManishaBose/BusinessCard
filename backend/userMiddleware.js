const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next){
    try{
        const token = req.headers.authorization;
        const tokenActual = token.split(" ")[1];
        jwt.verify(tokenActual, process.env.JWT_SECRET);
        next();
    } catch(e){
        console.error(e);
        return res.status(401).json({
            message: "Invalid username or password"
        })
    }
}

module.exports = ({
    userMiddleware
})