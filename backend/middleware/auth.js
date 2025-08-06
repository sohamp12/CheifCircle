const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"];

    if (token) {
        token = token.split(" ")[1];
        jwt.verify(token, process.env.Secret_Key, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid token" });
            } else {
                console.log(decoded);
                req.user = decoded;
                next(); // ✅ Only call next after setting req.user
            }
        });
    } else {
        return res.status(400).json({ message: "Token not provided" });
    }
};

module.exports = verifyToken;
