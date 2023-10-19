const express = require('express')
const morgan = require('morgan')
const router = require('./controller/router')

// express app
const app = express()

// view engine
app.set('view engine', 'ejs')

//middleware & log page
app.use(morgan('tiny'))


// stactic middleware
app.use(express.static('public'))

app.get("/")
app.get("ASK")
app.get("about")
app.get("product")
app.get("contact") 
app.get("table")
app.get("login")


app.use(router)

app.use((req, res) => {
    res.status(404).render('404')
})
app.listen(5000)