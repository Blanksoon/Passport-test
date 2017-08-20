process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var db = mongoose()
var app = express();
app.listen(3000);

module.exports = function() {
  require('../app/routes/index.routes')(app);
  require('../app/routes/user.routes')(app);
  //app;
}
console.log('Server running at http://localhost:3000');