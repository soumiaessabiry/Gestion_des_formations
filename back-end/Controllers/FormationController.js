const formationModel=require("../Models/FormationModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
const ApiError=require("../middlewares/CatchError")
const multer = require('multer')
const fs = require("fs");
const path = require('path')

const Ajouterformation=async(req,res)=>{
    const Formation=await formationModel.create({
        Name_Formation:req.body.Name_Formation,
        image:req.file.filename,
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
    // let image=req.file;
    const update_formation=await formationModel.findOneAndUpdate({_id:req.params.id},{
        $set:{
            Name_Formation:req.body.Name_Formation,
            image:req.file.filename,
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
const AfficheFormations=async(req,res)=>{
    const All_formations=await formationModel.find()
    if(All_formations.length>0 ){
        res.status(201).json({All_formations})
        
    }else{
        throw Error("you don't have any formation")
    }
}
module.exports={
    Ajouterformation,
    UpdateFormation,
    DeletFormation,
    AfficheFormations,

}