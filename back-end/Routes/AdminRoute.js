const express=require('express')
const router=express.Router()
const {Ajouterorganisme}=require("../Controllers/OrganismeController")

router.post('/AjouterOrganisme',Ajouterorganisme)

module.exports=router