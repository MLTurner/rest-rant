//Require needed modules
const express = require('express')
//Initialize the app object
const app = express()

app.get('/', (req, res) => {
res.send('Hello world!')
})
//Tell server to listen for connections
app.listen(3000)