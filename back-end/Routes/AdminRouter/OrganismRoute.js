const express=require('express')
const router=express.Router()
const {Ajouterorganisme,UpdateOrganisme,DeletOrganisme,AfficherOrganismes}=require("../../Controllers/OrganismeController")
const CatchError=require("../../middlewares/CatchError")
const errorHandller=require("../../middlewares/ErrorHandler")
const verifyToken=require("../../middlewares/VerifeyToken")
const AdminMiddleware=require("../../middlewares/AdminMiddleware")
router.post('/Ajouterorganisme',[verifyToken,AdminMiddleware],CatchError(Ajouterorganisme))
router.put('/Updateorganisme/:id',[verifyToken,AdminMiddleware],CatchError(UpdateOrganisme))
router.delete('/Deletorganisme/:id',[verifyToken,AdminMiddleware],CatchError(DeletOrganisme))
router.get('/AfficherOrganismes',[verifyToken,AdminMiddleware],CatchError(AfficherOrganismes))
router.use(errorHandller)

module.exports=router