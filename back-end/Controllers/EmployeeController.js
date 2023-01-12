const userModel=require("../Models/UsersModel")
const {validation_user}=require("../middlewares/ValidationJoi")

const Profil_employee=async(req,res)=>{
    const user_id=req.User._id
    const Check_user=await userModel.findOne({_id:user_id})
    res.status(200).json(Check_user)
}
const UpdateProfilemployee=async(req,res)=>{
    const {error}=validation_user(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
    const user_id=req.User._id
    const updat_profil=await userModel.findOneAndUpdate({_id:user_id},{$set:{
        First_name:req.body.First_name,
        Last_name:req.body.Last_name,
        email:req.body.email,
        phone:req.body.phone,
    }})
    if(updat_profil){
        res.status(201).json(updat_profil)
    }else{
        throw Error("Error to update profil")
    }
}
module.exports={Profil_employee,UpdateProfilemployee}
 

