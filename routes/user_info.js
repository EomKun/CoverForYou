const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    req.session.page_status = "user_info";

    res.render("index", { 
        page_status: req.session.page_status, 
        name: req.session.name 
    });
});

module.exports = router;