var express    = require('express')
var bodyParser = require('body-parser')
var logger     = require('morgan')
var session = require('express-session')

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(require('./controllers'))


var server = app.listen(3000, function () {
  console.log('server listening on %d', server.address().port)
})
