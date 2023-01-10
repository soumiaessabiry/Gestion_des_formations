const express=require('express')
const router=express.Router()
const {Ajouterformation,UpdateFormation,DeletFormation,AfficheFormations}=require("../../Controllers/FormationController")
const CatchError=require("../../middlewares/CatchError")
const upload=require("../../middlewares/upload_images")
const errorHandller=require("../../middlewares/ErrorHandler")
const multer=require("multer")
router.post('/AjouterFormation',upload.single('image'),CatchError(Ajouterformation))
router.put('/Updateformation/:id',CatchError(UpdateFormation))
router.delete('/Deletformation/:id',CatchError(DeletFormation))
router.get('/Afficheformations',CatchError(AfficheFormations))
router.use(errorHandller)

module.exports=router