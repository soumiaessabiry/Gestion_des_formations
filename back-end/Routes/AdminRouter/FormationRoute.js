const express=require('express')
const router=express.Router()
const {Ajouterformation,UpdateFormation,DeletFormation,AfficheFormations}=require("../../Controllers/FormationController")
const CatchError=require("../../middlewares/CatchError")
const upload=require("../../middlewares/upload_images")
const errorHandller=require("../../middlewares/ErrorHandler")
const multer=require("multer")
const verifyToken=require("../../middlewares/VerifeyToken")
const AdminMiddleware=require("../../middlewares/AdminMiddleware")

router.post('/AjouterFormation',[verifyToken,AdminMiddleware],upload.single('image'),CatchError(Ajouterformation))
router.put('/Updateformation/:id',[verifyToken,AdminMiddleware],upload.single('image'),CatchError(UpdateFormation))
router.delete('/Deletformation/:id',[verifyToken,AdminMiddleware],CatchError(DeletFormation))
router.get('/Afficheformations',[verifyToken,AdminMiddleware],CatchError(AfficheFormations))
router.use(errorHandller)

module.exports=router