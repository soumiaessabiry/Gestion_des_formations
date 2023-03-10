const userModel=require("../Models/UsersModel")
const OrganismeModel=require("../Models/OraganismeModel")
const formationmodel=require("../Models/FormationModel")
const userformationmodel=require("../Models/Users_Formation_model")
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
            const employe=await userModel.create({
                First_name:req.body.First_name,
                Last_name:req.body.Last_name,
                email:email_user,
                phone:req.body.phone,
                password:hashPassword,
                id_organisme:id_organisme,
               
            })
            res.status(201).json({employe})
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
const AllEmployee=async(req,res)=>{
    let employe="employe"
    const allemployee=await userModel.find({Role:employe})
    .populate([
        {
          path: 'id_organisme',  
          model:OrganismeModel,
          select: {name_organisme:1}
      },
    ])
        res.status(201).json({allemployee})
        throw Error("users note existe")


}
const countEmployee=async(req,res)=>{
    let employe="employe"
    const countemploye=await userModel.find({Role:employe}).countDocuments()
        res.status(201).json(countemploye)

    

}

const UpdateEmployee=async(req,res)=>{
    const {error}=validation_user(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
    const updatemploye=await userModel.findOneAndUpdate({_id:req.params.id},{$set:{
        First_name:req.body.First_name,
        Last_name:req.body.Last_name,
        email:req.body.email,
        phone:req.body.phone,
        id_organisme:req.body.id_organisme,
    }})
    if(updatemploye){
        res.status(201).json({updatemploye})
    }else{
        throw Error("Error to update employee")
    }

}
const Deletemploye=async(req,res)=>{
    const deletemploye=await userModel.findOneAndRemove({_id:req.params.id})
    if (deletemploye) {
        res.status(200).json({msg:"Success delete Employee"})
    } else {
        throw error("error to delet employee")
    }
}
const AssigneFormation=async(req,res)=>{
    let id_user=req.body.id_user
    let id_formation=req.body.id_formation
    const checkformation=await userformationmodel.find({id_formation:id_formation})
      if(checkformation.length===0){
        const Assignerformation=await userformationmodel.create({
            id_user:id_user,
            id_formation:id_formation
            })
            if(Assignerformation){
                res.json({Assignerformation})
            }else{
                res.send("error")
            }
        }else{
            throw Error("formation deja assigne")

      }
        
   
    }

module.exports={
    Login,
    AjouterEmployee,
    Logout,
    AllEmployee,
    UpdateEmployee,
    Deletemploye,
    countEmployee,
    AssigneFormation
}