const express=require('express')
const router=express.Router()
const {Ajouterorganisme,UpdateOrganisme,DeletOrganisme,AfficherOrganismes}=require("../../Controllers/OrganismeController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")

router.post('/Ajouterorganisme',CatchError(Ajouterorganisme))
router.put('/Updateorganisme/:id',CatchError(UpdateOrganisme))
router.delete('/Deletorganisme/:id',CatchError(DeletOrganisme))
router.get('/AfficherOrganismes',CatchError(AfficherOrganismes))
router.use(errorHandller)

module.exports=router