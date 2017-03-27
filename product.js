var http = require('http');
var express = require('express');
var url = require('url');
const proxy = require('http-proxy-middleware');//引入代理中间件

var app = express();
app.use(express.static(__dirname + '/dist'));
// Add middleware for http proxying
const apiProxy = proxy('/api', { target: 'http://localhost:8000',changeOrigin: true });//将服务器代理到localhost:8080端口上

app.use('/api/*', apiProxy);//api子目录下的都是用代理

app.all('/*',function(req,res){
	res.send('./dist/index.html');
});

// 创建服务端
http.createServer(app).listen('8088', function() {
	console.log('启动服务器完成!\n请在浏览器中打开http://172.0.0.1:8088');
});