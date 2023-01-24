const { default: mongoose } = require("mongoose");

const jobschema = mongoose.Schema({
    company_name:{ type: String, required: true },
  position: { type: String, required: true },
  contract: { type: String, required: true },
  location:{type:String, require:true }
});


const Job = mongoose.model("job", jobschema);

module.exports =  Job  ;