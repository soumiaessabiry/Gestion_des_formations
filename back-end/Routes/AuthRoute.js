const express = require('express')
const router = express.Router()
const {Login}=require("../Controllers/AuthController")

router.get('/login',Login)

module.exports= router;