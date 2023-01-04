const userModel=require("../Models/UsersModel")
const OrganismeModel=require("../Models/OraganismeModel")
const jwt=require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const dotenv=require("dotenv")
var bcrypt = require('bcryptjs');

 const Login=(req,res)=>{
    res.send("hello login")
}
 const AjouterEmployee=asyncHandler(async(req,res)=>{
    let email_user=req.body.email
    let password=req.body.password
    let salt=await bcrypt.genSalt(10)
    let hashPassword= bcrypt.hashSync(password,salt)
    let id_organisme=req.body.id_organisme
    let check_user=await userModel.findOne({email:email_user})
    let check_organisme=await OrganismeModel.findOne({id_organisme:id_organisme})
    if(check_user){
        res.status(401).json("email is areardy exist")
    }
    if(!check_organisme){
        res.status(401).json("Organisme is not existe")
    }
    const new_user=await userModel.create({
        First_name:req.body.First_name,
        Last_name:req.body.Last_name,
        email:email_user,
        phone:req.body.phone,
        password:hashPassword,
        Role:req.body.Role,
        id_organisme:id_organisme
    });
    res.status(201).json(new_user)
    
    
})




module.exports={
    Login,
    AjouterEmployee
}