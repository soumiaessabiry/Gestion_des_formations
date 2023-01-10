const userModel=require("../Models/UsersModel")
const OrganismeModel=require("../Models/OraganismeModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
var bcrypt = require('bcryptjs');


const Login=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    const Check_User=await userModel.findOne({email:email})
    if(Check_User){
        const compar_password=await bcrypt.compare(password,Check_User.password)
        if(compar_password){
            res.status(200).json({msg:"Welcom"+Check_User.First_name+Check_User.Last_name})
        }else{
            throw Error(" Sorry Password is Inccorect ")
        }
    }else{
        throw Error(" Sorry Users is note existe ")
    }
}


const AjouterEmployee=async(req,res)=>{
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
                Role:req.body.Role,
                id_organisme:id_organisme,
               
            })
            res.status(201).json(new_user)
        }else{
            throw Error("Organisme is not existe")

        }
    }
}




module.exports={
    Login,
    AjouterEmployee
}