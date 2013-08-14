var es = require('../es')
var url = require('url')

module.exports = function (req, res, next, id) {
  es.get({_type: '_all', _id: id}, function (err, data) {
    if (err) return next() // 404 on any error
    res.end(JSON.stringify(data._source))
  })
}
