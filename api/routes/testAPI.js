var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("API is REALLY working properly REALLY");
});

module.exports = router;
