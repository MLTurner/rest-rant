//Require needed modules
require('dotenv').config()
const express = require('express')

//Initialize the app object
const app = express()

//Import router we created
app.use('/places', require('./controllers/places'))

//Make a homepage route
app.get('/', (req, res) => {
res.send('Hello world!')
})

//Make a wildcard route
app.get('*', (req, res) =>{
res.status(404).send('<h1>404 Error</h1>')
})
//Tell server to listen for connections
app.listen(process.env.PORT)



