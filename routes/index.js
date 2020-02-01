const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    page_status = "not_login";

    res.render('index', { page_status });
});

module.exports = router;