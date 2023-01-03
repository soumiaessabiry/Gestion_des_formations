const userModel=require("../Models/UsersModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
var bcrypt = require('bcryptjs');

 const Login=(req,res)=>{
    res.send("hello login")
}
 const Register=async(req,res)=>{
        let email_user=req.body.email
        let password=req.body.password
        let salt=await bcrypt.genSalt(10)
        let hashPassword= bcrypt.hashSync(password,salt)
        const checkUser= await userModel.findOne({email:email_user})
    if(checkUser){res.json({err:"User us aready exiiste"})}
    else{
        const New_users=new userModel({
            First_name:req.body.First_name,
            Last_name:req.body.Last_name,
            email:email_user,
            phone:req.body.phone,
            password:hashPassword,
            Role:req.body.Role,
        })
        const SaveUser=await New_users.save()
        if(!SaveUser){res.json({err:"error to add users"})}else
        res.send(SaveUser)
   }
}




module.exports={
    Login,
    Register
}