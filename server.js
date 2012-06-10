var express = require('express')
  , app = express.createServer(express.static(__dirname + '/public'))

app.listen(process.env.PORT || process.argv[2] || 9000)

app.on('listening', function () {
  console.log('listening on :', app.address())
})
