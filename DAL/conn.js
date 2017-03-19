var log4js = require('log4js');
log4js.replaceConsole();

var config;
var mysql = require('mysql');

try{
  config = require('./config.json');
}catch(err){
  console.error(err);
}

if(!config){
  console.error("cannot find db config.");
  return;
}

var pool  = mysql.createPool(config);

exports.doQuery = function(sql,callback){
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query(sql, function(err, results,fields) {
      // And done with the connection.
      if(1==callback.arguments.length)
        callback(results);
      callback(err,results);
      connection.release();

      if(err) throw err;
      // Don't use the connection here, it has been returned to the pool.
    });
  });
};
