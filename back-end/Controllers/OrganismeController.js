const OrganismeModel=require("../Models/OraganismeModel")
const dotenv=require('dotenv')

const Ajouterorganisme=async(req,res)=>{
    const Organisme=await OrganismeModel.create({
        name_organisme:req.body.name_organisme,
        ville:req.body.ville,
        Address:req.body.Address,
        phone:req.body.phone
    })
    res.status(201).json({Organisme})
    
}
module.exports={Ajouterorganisme}