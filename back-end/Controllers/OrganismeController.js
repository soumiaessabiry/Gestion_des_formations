const OrganismeModel=require("../Models/OraganismeModel")
const dotenv=require('dotenv')
const asyncHandler = require('express-async-handler')

const Ajouterorganisme=asyncHandler(async(req,res)=>{
    const Organisme=await OrganismeModel.create({
        name_organisme:req.body.name_organisme,
        ville:req.body.ville,
        Address:req.body.Address,
        phone:req.body.phone
    })
    res.status(201).json({Organisme})
    
})
module.exports={Ajouterorganisme}