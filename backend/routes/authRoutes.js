const express = require("express");
const { testAuth } = require("../controllers/authController");
const router = express.Router();


router.get("/test",async(req,res)=>{
    res.send("Auth route works")
})




module.exports = router;
