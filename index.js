//Require needed modules
require('dotenv').config()
const express = require('express')

//Initialize the app object
const app = express()

//Defining the view engine (JSX in this case)
app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Import router we created
app.use('/places', require('./controllers/places'))

//Make a homepage route
//After defining home, change res.send to res.render
//No need to specify the views folder, it already knows to
app.get('/', (req, res) => {
res.render('home')
})


//Make a wildcard route
app.get('*',(req, res) => {
    res.render('error404')
})

//Tell server to listen for connections
app.listen(process.env.PORT)
