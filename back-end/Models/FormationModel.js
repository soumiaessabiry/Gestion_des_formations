const mongoose=require("mongoose")
const FormationSchema=new mongoose.Schema({
    Name_Formation:{
        type:String,
        required:true
    },
    Image_formation:{
        type:String,
        required:true
    },
    Date_debut:{
        type:Date,
        required:true
    },
    Date_Fin:{
        type:Date,
        required:true
    },
    Desciption:{
        type:String,
        required:true
    },
})
const Formation=mongoose.model('Formations',FormationSchema)
module.exports=Formation