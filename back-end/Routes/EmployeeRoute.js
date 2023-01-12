const express=require("express")
const router=express.Router()
const errorHandller=require("../middlewares/ErrorHandler")
const CatchError=require("../middlewares/CatchError")
const {Profil_employee}=require("../Controllers/EmployeeController")
const verifyToken=require("../middlewares/VerifeyToken")
const EmployeeMiddleware=require("../middlewares/EmployeeMiddleware")
router.get("/Profil_emplyee",[verifyToken,EmployeeMiddleware],CatchError(Profil_employee))
router.use(errorHandller);

module.exports=router
