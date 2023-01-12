const express=require("express")
const router=express.Router()
const errorHandller=require("../middlewares/ErrorHandler")
const CatchError=require("../middlewares/CatchError")
const {Profil_employee,UpdateProfilemployee}=require("../Controllers/EmployeeController")
const verifyToken=require("../middlewares/VerifeyToken")
const EmployeeMiddleware=require("../middlewares/EmployeeMiddleware")
router.get("/Profil_emplyee",[verifyToken,EmployeeMiddleware],CatchError(Profil_employee))
router.put("/UpdateProfilemployee",[verifyToken,EmployeeMiddleware],CatchError(UpdateProfilemployee))
router.use(errorHandller);

module.exports=router
