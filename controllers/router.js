const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render('ASK')
})
router.get("/home", (req, res) => {
    res.render('home')
})
router.get("/about", (req, res) => {
    res.render('about')
})
router.get("/product", (req, res) => {
    res.render('product')
})
router.get("/contact", (req, res) => {
    res.render('contact')
})
router.get("/table", (req, res) => {
    res.render('table')
})

router.get("/login", (req, res) => {
    res.render('login')
})

module.exports = router;