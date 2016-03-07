var app = require('express')();
var LucyConsole = require('lucy-console');

var apiConsole = new LucyConsole({
  swagger: require('./swagger.json'),
})

app.use(apiConsole.router);
app.listen(3000)
