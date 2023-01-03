const mongoose=require("mongoose")
const OrganismeSchema=new mongoose.Schema({
    
    name_organisme:{
        tyoe:String,
        required:true
    },
    ville:{
        tyoe:String,
        required:true
    },
    Address:{
        tyoe:String,
        required:true
    },
    phone:{
        tyoe:Number,
        required:true
    }
    
})
const Organisme=mongoose.model('Organismes',OrganismeSchema)
module.exports=Organisme
