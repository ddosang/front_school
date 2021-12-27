var express = require('express');
var router = express.Router();

// 로그인 시 DB에 user id pw가 있는지 없는지 확인하는 과정을 거쳐야 한다.
const userInfo = {
  lim: {
    password: "asdf",
  },
  kim: {
    password: "qwer",
  },
};

router.get("/", (req, res) => {
  const session = req.session;
  res.render('index', {
    username: session.username,
  });
});

/* GET users listing. */
router.get('/login/:username/:password', (req, res) => {
  const session = req.session;
  const {username, password} = req.params;
  if(!userInfo[username]) {
    res.status(400).json({
      message: "user not found",
    })
  }

  if(userInfo[username]["password"] === password) {
    // session에 저장
    session.username = username;
    res.status(200).json({
      message: "login success",
    });
  } else {
    res.status(400).json({
      message: "user pw incorrect!!",
    });
  }
});

router.get('/logout', (req,res) => {
  const session = req.session;
  if(session.username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
  } else {
    res.redirect("/users");
  }
})

module.exports = router;
