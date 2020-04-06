const express=require('express')
const mongoose=require('mongoose')

const connectDB=async function(req,res,next){
        try{
          
          await  mongoose.connect(process.env.DB_CONN_URL,{ useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 1000 })
          console.log("db sucesffuly connected")  
          next()
         
        }catch(err){
          console.log("error happens at db handler")
          res.status(500).json("Server database connection failed")
        }
}
module.exports=connectDB;
