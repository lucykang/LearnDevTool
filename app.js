const express = require('express');
const path = require('path');
const open = require('open')
const debug = require('debug')('projectcoffee:server');
const http = require('http');

// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const baseDir = process.env.NODE_ENV === 'production' ? 'build' : 'dist';
const port = process.env.NODE_ENV === 'production' ? 8080: 3000;
const app = express();

app.use(require('connect-livereload')({port: 35729}))
app.use(express.static(path.join(__dirname, baseDir)));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './', baseDir, '/index.html' ))
})


/**
 * Create HTTP server.
 */
http.createServer(app).listen(port, () => {
  open(`http://localhost:${port}`)
}).on('error', onError).on('listening', () => {
  
  debug('Listening on PORT: ' + port);
})


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}