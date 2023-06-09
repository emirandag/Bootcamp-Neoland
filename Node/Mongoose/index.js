const express = require('express')

const {connect} = require('./db.js')
connect()

const PORT = 3000
const server = express()

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})