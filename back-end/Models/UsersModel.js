const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: true,
  },
  Last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:[true,'email must be unique']
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  id_organisme: [
    {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Organismes",
    type:String
    },
  ],
});
const Users = mongoose.model("users", UsersSchema);
module.exports = Users;
