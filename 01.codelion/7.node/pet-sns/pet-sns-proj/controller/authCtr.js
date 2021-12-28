const bcrypt = require("bcrypt");
const User = require('../model/auth');
const secretKey = require('../config/secretKey.json');
const jwt = require("jsonwebtoken");

const authCtr = {
    // 회원가입
    register: async (req, res) => {
        const { username, password } = req.body;

        const exist = await User.findOne({ username: username }); // username 과 일치하는 항목이 있는지
        // user가 있으면 회원가입 불가능
        if (exist) {
            res.status(504).send("user exists");
            return
        }

        const user = new User({
            username: username
        });

        const hashedPassword = await bcrypt(password, 10); // hash 10번
        user.password = hashedPassword;
        await user.save();
        res.redirect('/');
    }, 
    login : async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username : username });
        if (!user) {
            res.status(500).send("user not found");
            return;
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            res.status(500).send("password invalid");
            return;
        }

        // 성공. JWT 토큰 발급해서 보낸다.
        const data = user.toJSON();
        delete data.password;
        const token = jwt.sign({
            _id: data.id,
            username: data.username
        }, secretKey.key,
        {
            // 실무에서는 30분 정도로 짧게 줘야하지만 테스트용이니 길게
            expiresIn: "7d"
        });

        res.cookie("access_token", token, {
            maxAge: 1000 * 60 * 60 *  24 * 7,
            httpOnly: true
        });
        res.redirect("/");
    }
};
