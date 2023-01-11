const express = require('express')
const router = express.Router()
const {AjouterEmployee}=require("../../Controllers/AuthController")
const errorHandller=require("../../middlewares/ErrorHandler")
const CatchError=require("../../middlewares/CatchError")
const verifyToken=require("../../middlewares/VerifeyToken")
const AdminMiddleware=require("../../middlewares/AdminMiddleware")
router.post('/Ajouteremployee',[verifyToken,AdminMiddleware],CatchError(AjouterEmployee))
router.use(errorHandller);

module.exports= router;