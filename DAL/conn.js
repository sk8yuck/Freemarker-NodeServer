var config = {
  connectionLimit : 10,
  host: '192.168.1.20',
  user: 'bookmanager',
  password : 'bookmanager',
  database : 'bookmanager'
},
mysql = require('mysql'),
pool  = mysql.createPool(config);

exports.doQuery = function(sql,callback){
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query(sql, function(err, results,fields) {
      // And done with the connection.
      callback(results);
      connection.release();

      if(err) throw err;
      // Don't use the connection here, it has been returned to the pool.
    });
  });
};
