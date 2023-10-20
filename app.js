const express = require('express')
const morgan = require('morgan')
const router = require('./controllers/router.js')
const mongoose = require('mongoose');
const connectDB = require('./model/dbCon')
const PORT = process.env.PORT || 5000


// connect to MongoDB
connectDB()
// express app
const app = express()


// view engine
app.set('view engine', 'ejs')

//middleware & log page
app.use(morgan('tiny'))


// middleware stactic file and photos
app.use(express.static('public'))

app.get("/")
app.get("home")
app.get("ASK")
app.get("about")
app.get("product")
app.get("contact")
app.get("table")
app.get("login")

app.use(router);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    // Listening PORT No.
    app.listen(PORT, ()=> {
        console.log(`server is runing on port No. ${PORT}`)
    })
})

app.use((req, res) => {
    res.status(404).render('404')
})
