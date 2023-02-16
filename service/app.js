var express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const fallback = require('express-history-api-fallback');
var path = require('path');

var app = express();

const publicPath = 'web';
const publicFilePath = path.join(__dirname, '../dist');

app.use(
  '/lowcodeApi',
  createProxyMiddleware({
    target: 'https://www.icoderun.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/lowcodeApi': '/lowcodeApi',
    },
  })
)

app.use(`/${publicPath}`, express.static(publicFilePath, { maxAge: 0 }));

app.use(`/${publicPath}`, fallback('index.html', { root: publicFilePath }))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   var headers = req.headers;

//   if (req.method !== 'GET') {
//     return next();
//   } else if (!headers || typeof headers.accept !== 'string') {
//     return next();
//   } else if (headers.accept.indexOf('application/json') >= 0) {
//     return next();
//   } else if (req.url.indexOf('.') >= 0) {
//     return next();
//   } else if (req.url.indexOf('/') === -1) {
//     return next();
//   }

//   const urls = req.url.split('/');
//   if (urls[1] && urls[1] === publicPath) {
//     req.url = `${publicFilePath}/index.html`;
//   }
//   next();
// });





// app.use(
//   cors({
//     origin: /http:*/,
//     credentials: true,
//   }),
// );

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  // err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;