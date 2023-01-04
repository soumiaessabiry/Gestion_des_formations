const express=require('express')
const router=express.Router()
const {Ajouterorganisme}=require("../Controllers/OrganismeController")
const {Ajouterformation}=require("../Controllers/FormationController")

router.post('/AjouterOrganisme',Ajouterorganisme)
router.post('/AjouterFormation',Ajouterformation)

module.exports=router