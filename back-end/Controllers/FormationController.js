const formationModel=require("../Models/FormationModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
const ApiError=require("../middlewares/CatchError")



 const Ajouterformation=async(req,res)=>{
    const Formation=await formationModel.create({
        Name_Formation:req.body.Name_Formation,
        Image_formation:req.body.Image_formation,
        Date_debut:req.body.Date_debut,
        Date_Fin:req.body.Date_Fin,
        Desciption:req.body.Desciption,
        
    })
    .then((Formation)=>{
        res.status(201).json({Formation})
    })
    .catch((err)=>{
       throw Error("Error to add Formation")

    })

 }
 const UpdateFormation=async(req,res)=>{
    const update_formation=await formationModel.findOneAndUpdate({_id:req.params.id},{
        $set:{
            Name_Formation:req.body.Name_Formation,
            Image_formation:req.body.Image_formation,
            Date_debut:req.body.Date_debut,
            Date_Fin:req.body.Date_Fin,
            Desciption:req.body.Desciption,
        }})
        if(update_formation){
            res.status(201).json({update_formation})
        }else{
            throw Error("Error to update Formation")
        }
 }
const DeletFormation=async(req,res)=>{
    const Delet_Formation=await formationModel.findOneAndRemove({_id:req.params.id})
    if(Delet_Formation){
        res.status(200).send("Success delet formation")
    }else{
        throw Error("Error to delet Formation")
    }
}
module.exports={
    Ajouterformation,
    UpdateFormation,
    DeletFormation
}