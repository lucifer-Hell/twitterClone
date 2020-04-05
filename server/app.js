const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose'),
cors =require('cors');
const app=express();
const PORT=8081
// here all our routes will come

// error handle function
app.use(function(req,res,next){
    let err=new Error("Route not found")
    err.status=404
    next (err);
})

// listen on server
app.listen(8081)
