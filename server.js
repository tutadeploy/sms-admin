const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

// 设置端口
app.set('port', process.env.PORT || 8091);

// 生产环境日志
app.use(logger('combined'));

// 解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件服务
app.use('/public', express.static('public'));
app.use('/pages', express.static('pages'));
app.use('/sdk', express.static('sdk'));

// 根路径重定向
app.get('/', function (req, res) {
  res.redirect('/#/crud/list');
});

// 其他所有路由返回 index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 错误处理中间件
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = http.createServer(app);

// 启动服务器
server.listen(app.get('port'), function () {
  console.log(
    'Web server listening on port http://localhost:' + app.get('port')
  );
});
