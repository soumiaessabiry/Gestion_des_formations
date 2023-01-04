const mongoose=require("mongoose")
const FormationSchema=new mongoose.Schema({
    Name_Formation:{
        type:String,
        required:true,
        unique:[true,"name Formation must be unique"]

    },
    Image_formation:{
        type:String,
        required:true
        
    },
    Date_debut:{
        type:String,
        required:true
    },
    Date_Fin:{
        type:String,
        required:true
    },
    Desciption:{
        type:String,
        required:true
    },
})
const Formation=mongoose.model('Formations',FormationSchema)
module.exports=Formation