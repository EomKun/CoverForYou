const express = require("express");
const router = express.Router();

router.get('/',(req, res, next)=>{
    if(req.body.page_status)
        req.session.page_status = req.body.page_status;

    //console.log(req.session.page_status, req.body.page_status);
    res.render("index", { 
        page_status : req.session.page_status,
        name : req.session.name
    });
});

router.post('/',(req, res)=>{ 
    req.session.page_status = req.body.page_status;
    
    res.render("index", { page_status : req.session.page_status });
});

module.exports = router;