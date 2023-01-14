const userModel=require("../Models/UsersModel")
const OrganismeModel=require("../Models/OraganismeModel")
const jwt=require('jsonwebtoken')
const  env=require("dotenv")
const  bcrypt = require('bcryptjs');
const SECRET=process.env.SECRET
const ls=require("local-storage")
const {validation_user}=require("../middlewares/ValidationJoi")

const Login=async(req,res)=>{
    const {error}=validation_user(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
    let email=req.body.email
    let password=req.body.password
    const Check_User=await userModel.findOne({email:email})
    if(Check_User){
        const compar_password=await bcrypt.compare(password,Check_User.password)
        if(compar_password){
            const token=jwt.sign({_id:Check_User._id,email:Check_User.email,Role:Check_User.Role,First_name:Check_User.First_name},SECRET)
            ls.set("token",token)
            res.status(200).json({token})
        }else{
            throw Error(" Sorry Password is Inccorect ")
        }
    }else{
        throw Error(" Sorry Users is note existe ")
    }
}


const AjouterEmployee=async(req,res)=>{
    const {error}=validation_user(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
    let email_user=req.body.email
    let password=req.body.password
    let id_organisme=req.body.id_organisme
    let salt=await bcrypt.genSalt(10)
    let hashPassword= bcrypt.hashSync(password,salt)
    let check_user=await userModel.findOne({email:email_user})
    let check_organisme=await OrganismeModel.findOne({_id:id_organisme})
    if(check_user){
        throw Error("email is areardy exist")
    }else{
        if(check_organisme){
            const new_user=await userModel.create({
                First_name:req.body.First_name,
                Last_name:req.body.Last_name,
                email:email_user,
                phone:req.body.phone,
                password:hashPassword,
                id_organisme:id_organisme,
               
            })
            res.status(201).json(new_user)
        }else{
            throw Error("Organisme is not existe")

        }
    }
}
const Logout=(req,res)=>{
    const logout_user=ls.clear()
    if(logout_user){
        res.status(200).json("by by")
    }else{
            throw Error("error pour logout")

    }
}



module.exports={
    Login,
    AjouterEmployee,
    Logout
}