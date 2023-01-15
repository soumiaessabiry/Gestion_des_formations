const express = require('express')
const router = express.Router()
const {AjouterEmployee,AllEmployee,UpdateEmployee}=require("../../Controllers/AuthController")
const errorHandller=require("../../middlewares/ErrorHandler")
const CatchError=require("../../middlewares/CatchError")
const verifyToken=require("../../middlewares/VerifeyToken")
const AdminMiddleware=require("../../middlewares/AdminMiddleware")
router.post('/Ajouteremployee',[verifyToken,AdminMiddleware],CatchError(AjouterEmployee))
router.get('/AllEmployee',[verifyToken,AdminMiddleware],CatchError(AllEmployee))
router.put('/UpdateEmployee/:id',[verifyToken,AdminMiddleware],CatchError(UpdateEmployee))
router.use(errorHandller);

module.exports= router;