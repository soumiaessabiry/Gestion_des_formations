const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: true,
    trim:true
  },
  Last_name: {
    type: String,
    required: true,
    trim:true

  },
  email: {
    type: String,
    required: true,
    unique:[true,'email must be unique'],
    trim:true

  },
  phone: {
    type: Number,
    required: true,
    trim:true

  },
  password: {
    type: String,
    required: true,
    trim:true

  },
  Role: {
    type:String,
    default:'employee',
    trim:true


  },
  id_organisme:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organismes",
    },
});
const Users = mongoose.model("users", UsersSchema);
module.exports = Users;
