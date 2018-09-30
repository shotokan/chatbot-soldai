const express = require('express')
const path = require('path')
const cors = require('cors')
let app = express()
app.use(cors())
console.log(__dirname)
app.use(express.static(path.join(__dirname, './dist')))
var port = process.env.PORT || 5000
// Server index.html page when request to the root is made
app.use('/dist', express.static('./dist'))
app.listen(port)
console.log('server started ' + port)
