const express=require('express')
const router=express.Router()
const {Ajouterformation}=require("../../Controllers/FormationController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")

router.post('/AjouterFormation',CatchError(Ajouterformation))
router.use(errorHandller)

module.exports=router