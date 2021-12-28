const express = require("express");
const router = express.Router();
const authCtr = require('../../controller/authCtr');

router.post('/register', authCtr.register);
router.get('/login', authCtr.login);

router.get('/register', (req, res) => {
    res.render("register");
});

router.post("/logout", (req, res) => {
    res.clearCookie("access_token");
    res.redirect("/");
});

module.exports = router;