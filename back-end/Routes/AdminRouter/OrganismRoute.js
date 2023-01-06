const express=require('express')
const router=express.Router()
const {Ajouterorganisme,UpdateOrganisme}=require("../../Controllers/OrganismeController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")

router.post('/Ajouterorganisme',CatchError(Ajouterorganisme))
router.get('/Updateorganisme/:id',CatchError(UpdateOrganisme))
router.use(errorHandller)

module.exports=router