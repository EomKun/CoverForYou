const express = require("express");
const router = express.Router();

router.post('/',(req, res)=>{
    if(req.body.page_status)
        req.session.page_status = req.body.page_status;
    
    res.render("index", { page_status : req.session.page_status });
});

module.exports = router;