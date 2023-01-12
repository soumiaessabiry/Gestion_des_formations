const express = require('express')
const router = express.Router()
const {Login,Logout}=require("../Controllers/AuthController")
const errorHandller=require("../middlewares/ErrorHandler")
const CatchError=require("../middlewares/CatchError")
router.post('/login',CatchError(Login))
router.get('/Logout',CatchError(Logout))
router.use(errorHandller);

module.exports= router;