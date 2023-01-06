const express=require('express')
const router=express.Router()
const {Ajouterformation,UpdateFormation,DeletFormation,AfficheFormations}=require("../../Controllers/FormationController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")

router.post('/AjouterFormation',CatchError(Ajouterformation))
router.put('/Updateformation/:id',CatchError(UpdateFormation))
router.delete('/Deletformation/:id',CatchError(DeletFormation))
router.get('/Afficheformations',CatchError(AfficheFormations))
router.use(errorHandller)

module.exports=router