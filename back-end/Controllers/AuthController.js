const userModel=require("../Models/UsersModel")
const jwt=require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const dotenv=require("dotenv")
var bcrypt = require('bcryptjs');

 const Login=(req,res)=>{
    res.send("hello login")
}
 const Register=asyncHandler(async(req,res)=>{
    let email_user=req.body.email
    let password=req.body.password
    let salt=await bcrypt.genSalt(10)
    let hashPassword= bcrypt.hashSync(password,salt)
    const new_user=await userModel.create({
        First_name:req.body.First_name,
        Last_name:req.body.Last_name,
        email:email_user,
        phone:req.body.phone,
        password:hashPassword,
        Role:req.body.Role,
    });
    res.status(201).json({new_user})
    // .catch((err)=>{ res.status(400).json(err)})
    
})




module.exports={
    Login,
    Register
}