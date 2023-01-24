const { default: mongoose } = require("mongoose");

const userschema = mongoose.Schema({
    name:{ type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role:{type:String, require:true }
});


const User = mongoose.model("user", userschema);

module.exports =  User  ;