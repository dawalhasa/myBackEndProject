const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MY_DATABASE, {
            useUnifiedTopology: "true",
            useNewUrlParser: "true"
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB