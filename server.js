var express = require('express')

var port = process.env.PORT || process.argv[2] || 9000
  , app = express.createServer(express.static(__dirname + '/public'))

app.listen(port)

app.on('listening', function () {
  console.log('listening on :', app.address())
})
