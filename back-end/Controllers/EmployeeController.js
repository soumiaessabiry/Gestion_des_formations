const userModel=require("../Models/UsersModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
const ApiError=require("../middlewares/CatchError")
const multer = require('multer')
const fs = require("fs");
const path = require('path')
const ls=require('local-storage')
const SECRET=process.env.SECRET
// const {validation_formation}=require("../middlewares/ValidationJoi")
const Profil_employee=async(req,res)=>{
  const user_id=req.User._id
  const Check_user=await userModel.findOne({_id:user_id})
    res.status(200).json(Check_user)
 

}
module.exports={Profil_employee}


