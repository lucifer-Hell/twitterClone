const express=require('express');
const mongoose=require('mongoose')


const User=require('./user')
const Msg=require('./messages')
module.exports={User,Msg};
