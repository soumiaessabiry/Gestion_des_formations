const OrganismeModel=require("../Models/OraganismeModel")
const dotenv=require('dotenv')

const Ajouterorganisme=async(req,res)=>{
    const Organisme=await OrganismeModel.create({
        name_organisme:req.body.name_organisme,
        ville:req.body.ville,
        Address:req.body.Address,
        phone:req.body.phone
    })
    
    .then((Organisme)=>{
        res.status(201).json({Organisme})
    })
    .catch((err)=>{
       throw Error("Error to add Organisme")

    })
}
const UpdateOrganisme=async(req,res)=>{
    const Update_Organisme=await OrganismeModel.findOneAndUpdate({_id:req.params.id},{$set:{name_organisme:req.body.name_organisme,ville:req.body.ville,phone:req.body.phone}})
    .then((Update_Organisme)=>{
        res.status(200).json({Update_Organisme})
    })
    .catch((err)=>{
        throw Error("Error to Update Organisme")
    })    
}
const DeletOrganisme=async(req,res)=>{
        const Delet_Organisme=await OrganismeModel.findOneAndRemove({_id:req.params.id})
        if(Delet_Organisme){
            res.status(200).send("Success Organisme delete ")
        }else{
            throw Error("Error to delete Organisme")

        }
        
}




module.exports={
    Ajouterorganisme,
    UpdateOrganisme,
    DeletOrganisme
}