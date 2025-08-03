// External Module
const express = require("express");
const authRouter = express.Router();

// Local Module
const authController = require("../controllers/authController");


authRouter.post("/login", authController.postLogin)
authRouter.post("/signup", authController.postSignUp);

module.exports = authRouter;