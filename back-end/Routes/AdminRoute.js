const express=require('express')
const router=express.Router()
const {Ajouterorganisme}=require("../Controllers/OrganismeController")
const {Ajouterformation}=require("../Controllers/FormationController")
const CatchError=require("../middlewares/CatchError")
const errorHandller=require("../middlewares/ErrorHandler")

router.post('/AjouterOrganisme',CatchError(Ajouterorganisme))
router.post('/AjouterFormation',CatchError(Ajouterformation))
router.use(errorHandller)

module.exports=router