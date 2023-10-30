const express = require("express");
const router = express.Router();
const routeHandler = require("../controllers/routeHandler")


router.get("/", routeHandler.ASK)
router.get("/home", routeHandler.home)
router.get("/about", routeHandler.about)
router.get("/product", routeHandler.product)
router.get("/contact", routeHandler.contact)
router.get("/table", routeHandler.table)
router.get("/login", routeHandler.login)
router.get("/allPage", routeHandler.allPage)

module.exports = router;