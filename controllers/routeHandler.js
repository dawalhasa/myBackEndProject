const ASK = ("/", (req, res) => {
    res.render('ASK')
})
const home = ("/home", (req, res) => {
    res.render('home')
})
const about = ("/about", (req, res) => {
    res.render('about')
})
const product = ("/product", (req, res) => {
    res.render('product')
})
const contact = ("/contact", (req, res) => {
    res.render('contact')
})
const table = ("/table", (req, res) => {
    res.render('table')
})

const login = ("/login", (req, res) => {
    res.render('login')
})

const allPage = ('/allPage', (req, res) => {
    res.render('allPage')
})
module.exports = {
    ASK,
    home,
    about,
    product,
    contact,
    table,
    login,
    allPage
}