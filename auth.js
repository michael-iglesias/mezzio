var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function (req, res, next) {

  if (req.headers['x-auth']) {
    req.auth = jwt.decode(req.headers['x-auth'], config.secret)
  }


  if(req.session.mezzioToken) {
    //console.log(req.session.mezzioToken);

    req.auth = jwt.decode(req.session.mezzioToken, config.secret)
    console.log(req.auth);
  }
  next()
}
