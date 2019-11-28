var express = require("express");
var router = express.Router();



router.get("/", function(req, res, next) {
    res.send("sujata mam");
});

router.get("/prajakta", function(req, res, next) {
    res.send("prajakta");
});

module.exports = router;
