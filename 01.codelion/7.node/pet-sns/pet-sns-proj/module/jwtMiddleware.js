// 사용자 확인 기능
const jwt = require("jsonnwebtoken");
const secretKey = require("../config/secretKey.json");

const jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        // isAuthenticated 에 빈 객체를 넘김 (토큰이 없으니까)
        res.locals.isAuthenticated = {};
        return next();
    }

    try {
        const decoded = jwt.verify(token, secretKey.key);
        req.userInfo = {
            _id: decoded.id,
            username: decoded.username
        };
        res.locals.isAuthenticated = { username : decoded.username };
        return next();
    } catch(error) {
        res.status(500).send("jwt error");
    }
}
