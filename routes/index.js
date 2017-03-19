var log4js = require('log4js');
log4js.replaceConsole();

var express = require('express');
var router = express.Router();

//TODO:When db ready open
// var conn = require('../DAL/conn.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{test:"test"});
});

module.exports = router;
