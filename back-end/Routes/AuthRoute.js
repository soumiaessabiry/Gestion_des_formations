const express = require('express')
const router = express.Router()
const {Login,Register}=require("../Controllers/AuthController")

router.get('/login',Login)
router.post('/Register',Register)

module.exports= router;