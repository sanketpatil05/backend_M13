const express = require("express");
const Job = require("../model/job.model");


const adrouter = express.Router();

adrouter.get("/", async(req, res)=>{

  const jobs=await Job.find();
  
  return  res.send(jobs)


});

adrouter.post("/", async (req, res)=>{
 
  const {company_name,position,contract, location }=req.body; 
 
  const data={ company_name, position, contract, location};

    let job=await Job.insertMany([data]);

      res.send(job);

})


adrouter.delete("/:id", async(req, res)=>{

    const id=req.params; 

    const data=await Job.findByIdAndDelete({_id:id.id})

    res.send("Job is deleted")


})

module.exports={adrouter};