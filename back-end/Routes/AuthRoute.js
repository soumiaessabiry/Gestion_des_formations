const express = require('express')
const router = express.Router()
const {Login,AjouterEmployee}=require("../Controllers/AuthController")
const errorHandller=require("../middlewares/ErrorHandler")
const CatchError=require("../middlewares/CatchError")
router.get('/login',CatchError(Login))
router.post('/Ajouteremployee',CatchError(AjouterEmployee))
router.use(errorHandller);

module.exports= router;