const mongoose=require("mongoose")
const User_formation_Schema=new mongoose.Schema({
    id_user:{
        type:mongoose.Schema.Type.ObjectId,
        ref:users
    },
    id_formation:{
      type:mongoose.Schema.Types.ObjectId,
      ref:Formations
    },
})
const user_formation=mongoose.model('Users_formations',User_formation_Schema)
module.exports=user_formation