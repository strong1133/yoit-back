var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/responseDto");



router.get('/', function(req, res, next) {
  responseDtoJson(null, null, '요이땅 test api', res);
  });


module.exports = router