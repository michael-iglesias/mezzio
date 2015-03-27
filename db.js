var mongoose = require('mongoose')
mongoose.connect('mongodb://nikita:nikita@kahana.mongohq.com:10020/tg', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
