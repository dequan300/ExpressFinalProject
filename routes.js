const express = require("express")
const playerRoutes=express.Router();
const pool= require("./connection");

// let nextId=3

playerRoutes.get("/player-info/:id",(req,res)=>{
let param =[id]
const id = parseInt(req.param.id)
});
module.exports=playerRoutes;