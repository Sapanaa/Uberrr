const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const {body} = require("express-validator");

router.post("/register", [
    body("name").not().isEmpty(),
    body("email").isEmail(),
    body("password").isLength({min: 6})
], userController.registerUser);

router.post("/login", [
    body("email").isEmail(),
    body("password").isLength({min: 6})
])

module.exports = router;