const express = require("express");

// the express.Router() function is used to create modular, mountable route handlers. It allows you to define a set of routes and middleware specific to a particular part of your application.
const router = express.Router();
const { login, register } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
