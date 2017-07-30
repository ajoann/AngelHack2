const express = require('express');
const bodyParser = require('body-parser');
const vision = require('node-cloud-vision-api')
const logger = require('morgan');
const axios = require('axios');
const mongoose = require('mongoose')
const mongoosedb = 'mongodb://test:test@ds129023.mlab.com:29023/angelhacksf2017';
const router = require('./routes');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));
/* ********** error handlers ********** */

// app.use('/', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


app.listen(port, function() {
  console.log('Express started. Listening on port %s', port);
});
