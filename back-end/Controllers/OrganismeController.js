const OrganismeModel=require("../Models/OraganismeModel")
const dotenv=require('dotenv')
const {validation_Organisme}=require("../middlewares/ValidationJoi")

const Ajouterorganisme=async(req,res)=>{
    const {error}=validation_Organisme(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
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
    const {error}=validation_Organisme(req.body)
    if(error){
        return res.json({error:error.details[0].message})
    }
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
const AfficherOrganismes=async(req,res)=>{
    const Affiche_Organismes=await OrganismeModel.find()
    if(Affiche_Organismes.length>0){
        res.status(200).json({Affiche_Organismes})
    }else{
        throw Error("you don't have any Organismes")
    }
}




module.exports={
    Ajouterorganisme,
    UpdateOrganisme,
    DeletOrganisme,
    AfficherOrganismes
}