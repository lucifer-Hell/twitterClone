// authentication routes
const express=require('express')
const router=express.Router()
const {signUp}=require('../handlers/auth')

router.post('/signUp',signUp);

module.exports=router;