var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt-simple')
var config = require('../../config')
var User   = require('../../models/user')

router.post('/sessions', function (req, res, next) {
  var username = req.body.username
  User.findOne({username: username})
  .select('password')
  .exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) { return res.sendStatus(401) }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) { return res.sendStatus(401) }
      var token = jwt.encode({username: username}, config.secret)

      req.session.mezzioToken = token;
      res.send(token)
    })
  })
})

router.get('/sessions/validate_user', function(req, res, next) {
  if(!req.session.mezzioToken) {
    res.sendStatus(401);
  } else {
    res.send(req.session.mezzioToken);
  }
});

module.exports = router
