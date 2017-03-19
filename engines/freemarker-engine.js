var log4js = require('log4js');
log4js.replaceConsole();

var path = require('path');
var viewRoot = path.join(__dirname, '../views');
var Freemarker = require('freemarker.js');
var fm = new Freemarker({
  viewRoot:viewRoot,
  options:{
    sourceEncoding:"utf-8",
    outputEncoding:"utf-8"
  }
});

exports.viewRoot = viewRoot;
exports.engine = function (filePath, options, callback) { // 定义模板引擎
  console.debug("Render template:",filePath);
  var sourceAbsolutePath = path.normalize(filePath);

  fm.render(sourceAbsolutePath.substring(path.normalize(viewRoot).length)
    ,options,function(err,html,output){
    if (err) return callback(new Error(err));
    return callback(null,html);
  });
};
