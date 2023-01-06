const express=require('express')
const router=express.Router()
const {Ajouterformation,UpdateFormation}=require("../../Controllers/FormationController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")

router.post('/AjouterFormation',CatchError(Ajouterformation))
router.put('/Updateformation/:id',CatchError(UpdateFormation))
router.use(errorHandller)

module.exports=router