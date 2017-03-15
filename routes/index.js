var express = require('express');
var router = express.Router();

var conn = require('../DAL/conn.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  conn.doQuery('SELECT * FROM BOOK_INFO',function(books){
    res.render('index',
    {
       books: books
     });
  });
});

module.exports = router;
