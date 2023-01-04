const formationModel=require("../Models/FormationModel")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
const asyncHandler = require('express-async-handler')


 const Ajouterformation=asyncHandler(async(req,res)=>{
    const Formation=await formationModel.create({
        Name_Formation:req.body.Name_Formation,
        Image_formation:req.body.Image_formation,
        Date_debut:req.body.Date_debut,
        Date_Fin:req.body.Date_Fin,
        Desciption:req.body.Desciption,
        
    })
    res.status(201).json({Formation})
})




module.exports={
    Ajouterformation
}