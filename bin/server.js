const http = require('http')
const serverHandle = require('../main')

const port = 8000

const server = http.createServer(serverHandle)

server.listen(port)
