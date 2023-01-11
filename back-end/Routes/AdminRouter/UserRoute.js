const express = require('express')
const router = express.Router()
const {AjouterEmployee}=require("../../Controllers/AuthController")
const errorHandller=require("../../middlewares/ErrorHandler")
const CatchError=require("../../middlewares/CatchError")
const verifyToken=require("../../middlewares/VerifeyToken")

router.post('/Ajouteremployee',CatchError(AjouterEmployee))
router.use(errorHandller);

module.exports= router;