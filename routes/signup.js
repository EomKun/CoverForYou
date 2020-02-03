const express = require("express");
const user = require("./user");
const router = express.Router();

router.post("/", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const pw = req.body.pw;

    for(let i = 0; i < user.length; i++) {
        if(user[i].email == email) {
            res.json({msg: `이미 가입된 사용자입니다`});
        }
    }

    req.session.page_status = req.body.page_status;
    user.push({ email, pw, name });

    res.render("index", { 
        page_status: req.session.page_status,
    });
    
});

module.exports = router;