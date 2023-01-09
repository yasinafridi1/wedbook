const express = require("express");
const authController = require("../app/https/controllers/authController/authController");
const serviceController = require("../app/https/controllers/serviceController/serviceController");
const auth = require("../app/https/middlewares/auth");


const Router = express.Router();

Router.post('/login', authController().login);
Router.post('/register', authController().register);
Router.get('/logout', auth, authController().logout);
Router.post('/register/services', serviceController().register);


module.exports = Router;