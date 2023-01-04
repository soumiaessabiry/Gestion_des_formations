const mongoose=require("mongoose")
const OrganismeSchema=new mongoose.Schema({
    
    name_organisme:{
        type:String,
        required:true,
        unique:[true,"name organisme must be unique"]

    },
    ville:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:[true,"phone must be unique"]

    }
    
})
const Organisme=mongoose.model('Organismes',OrganismeSchema)
module.exports=Organisme
