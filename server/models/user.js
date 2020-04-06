const express=require('express')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const Msg=require('./messages')
mongoose.Promise=Promise;
//  user scheama

const userSchema=mongoose.Schema({
    userName:{
        type:"String",
        required:true,
        unique:true
    }, 
    userEmail:{
        type:"String",
        required:true,
        unique:true
    },
    userPassword:{
        type:"String",
        required:true,
        
    },
    userProfileImg:{
        type:"String"
        
    },
    messages:[
        {type:String,
          ref:"Msg"}
    ]   
},
    {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}})

    // schemas must have a pre validator 
userSchema.pre('save', async function(next){
    // if user password is not modified
    // remember it case when its trying to change password again

            if(!this.isModified('userPassword')){
                next()
            }
       try{
            // convert the password
            let hashedPassword=await bcrypt.hash(this.userPassword,10);
            this.userPassword=hashedPassword;
            next();
                 }
     catch(err)
        {
            
             next(err)
    }
   
})


    userSchema.methods.validatePassword= async function(givenPassword){
        try{
            
            let isVerified=await bcrypt.compare(givenPassword,this.userPassword)
            if(isVerified) return true;
            else {
               
              return false;
            }
        } 
        catch(err)
        {
             
           return err;
        }
     }
     
// convert into model
const User=mongoose.model("User",userSchema)







module.exports=User;
