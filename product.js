var http = require('http');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/dist'));

app.use('*',function(req,res){
	res.send('./dist/index.html');
});


// 创建服务端
http.createServer(app).listen('8011', function() {
	console.log('启动服务器完成!\n请在浏览器中打开http://172.0.0.1:8011');
});