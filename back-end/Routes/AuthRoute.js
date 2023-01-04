const express = require('express')
const router = express.Router()
const {Login,AjouterEmployee}=require("../Controllers/AuthController")

router.get('/login',Login)
router.post('/Ajouteremployee',AjouterEmployee)

module.exports= router;