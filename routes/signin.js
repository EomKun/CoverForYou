const express = require("express");
const router = express.Router();

const user = require("./user");

router.get("/", (req, res) => {
    const email = req.query.email;
    const pw = req.query.email;
    let login_ok = false;

    for(let i = 0; i < user.length; i++) {
        if(user[i].email == email) {
            req.session.email = email;
            req.session.page_status = "logined";
            req.session.name = user[i].name;
            
            login_ok = true;
            res.render("index", {page_status: req.session.page_status });
        }
    }
    
    if(!login_ok)
        res.json({ msg: `가입이나 하쇼` }); ;
});

module.exports = router;