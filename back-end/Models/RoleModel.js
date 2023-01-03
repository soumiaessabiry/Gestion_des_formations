const mongoose=require("mongoose")
const roleSchema=new mongoose.Schema({
    role_name: {
        type:String,
        require:true    
    }
})
const roles=mongoose.model("Roles",roleSchema)
module.exports=roles