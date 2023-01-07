const express = require("express");
const authController = require("../app/https/controllers/authController/authController");


const Router = express.Router();

Router.post('/login', authController().login);
Router.post('/register', authController().register);


module.exports = Router;