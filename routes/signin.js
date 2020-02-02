const express = require("express");
const router = express.Router();

const user = require("./user");

router.post("/", (req, res) => {
    let msg;
    if(user.email == req.body.email){
        const email = req.body.email;
        const pw = req.body.pw;

        msg = `${email}님 환영합니다(님 비번 ${pw}임 ㅋㅋ)`;
        
    } else {
        msg = `가입이나 하쇼`;
    }

    res.json({ msg });
});

module.exports = router;