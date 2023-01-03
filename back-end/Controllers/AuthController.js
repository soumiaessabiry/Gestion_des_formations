const userModel=require("../Models/UsersModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
const { models } = require("mongoose")

 const Login=(req,res)=>{
    res.send("hello login")
}



module.exports={
    Login
}