const express = require('express');
const morgan = require('morgan');
const router = require('./router/router.js');
const path = require('path');
require('dotenv').config();
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const connectDB = require('./model/dbCon')
const PORT = process.env.PORT || 4000


// connect to MongoDB
connectDB();

// Instantiate express app 
const app = express();


// view engine
app.set('view engine', 'ejs');
app.set('layout', 'layouts/allPages.ejs')
app.use(expressLayouts);

//middleware & log page
app.use(morgan('dev'))


// middleware stactic file and photos
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, 'css/style.css')))
// app.use('/images', express.static(path.join(__dirname, 'images/')))
// app.use('/js', express.static(path.join(__dirname, 'js/')))

app.use(router);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    // Listening PORT No.
    app.listen(PORT, () => {
        console.log(`server is runing on port No. ${PORT}`)
    })
})

app.use((req, res) => {
    res.status(404).render('404')
})
