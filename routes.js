const express = require("express")
const playerRoutes=express.Router();
const pool= require("./connection");

let nextId=3

playerRoutes.get("/player-info",(req,res)=>{
let sql ="select *from player_data"
pool.query(sql).then(result=>{
    // console.log(result.rows)
res.json(result.rows)
res.status(200)
});
});

playerRoutes.get("/player-info/:id",(req,res)=>{
let param =[id]
const id = parseInt(req.param.id)
let sql = "select*from player_data where id=$1::int"
pool.query(sql,param).then(result=>{
    if(result.rows.lenght!==0){
        res.json(result.rows[0])
    }else{
        res.status(404)
        res.send("no player")
    }
})
});



playerRoutes.post("/player-info",(req,res)=>{
    const info=req.body;
    info.id =nextId
    nextId++
    let sql= `insert into player_data (name,popularity,charisma,academic)
    values ($1::text,$2::int,$3::int,$4::int,5::int,6::int,7::int,8::text) RETURNING *`;
    let param= [info.name,info.popular,info.unpopular,info.nice,info.jock,info.bully,info.nerd,info.personality]
    pool.query(sql,param).then(result=>{
      res.status(201);
      res.json(result.rows[0])

    })
    

});
playerRoutes.put("player-info/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const player= req.body;
    player.id = id;
    
    const index = players.findIndex(i => i.id === id);
    
    players.splice(index, 1, player);
    res.json(player);
  });
module.exports=playerRoutes;