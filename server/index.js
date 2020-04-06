require('dotenv').config()
const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose'),
cors =require('cors');
const app=express();
const PORT=8081
const errorHandler=require('./handlers/errorHandler')
const authRoute=require('./routes/auth')
const msgRoute=require('./routes/messages')
const connectDB=require('./middlewares/dbHandler')

app.use(bodyParser.json())

// ensures db is connected before any routes are processed
app.use(connectDB)
// here all our routes will come
app.use('/api/auth/',authRoute)

app.use('/api/user',msgRoute)

// error handle function
// if none of the route matches
app.use('*',function(req,res,next){
    console.log(err)
    let err=new Error("Route not found")
    err.status=404
    next (err);
})


// for all errors to display in json format
app.use(errorHandler)

// listen on server
app.listen(PORT,()=>{
    console.log("app is listening")
})
