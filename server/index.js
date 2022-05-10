const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");

const { dbserver, user, password, database, port } = require('./config'); 

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());



const db = mysql.createPool({
    host: dbserver,
    user: user,
    password: password,
    database: database,
    port: port
});

app.post("/api/insert", (req,res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;

    const sqlInsert = " INSERT INTO user (name, email, tel) VALUES (?, ?, ?)"
    db.query(sqlInsert, [name, email, tel], (err, result) =>
    {
        res.send(result);
    }
    )
});


app.get('/api/get/:id', (req,res) => {

    const id = req.params.id;
    const sqlSelect = "Select * From user where id = ? ";
    db.query(sqlSelect, id, (err, result) =>{
      res.send(result[0]);
    });
  })

app.get('/api/get', (req,res) => {
    
    const sqlSelect = "Select * From user";
    db.query(sqlSelect, (err, result) =>{
      res.send(result);
    });
  })
  
  app.delete('/api/delete/:id', (req,res) =>{

    const id = req.params.id;
    const sqlDelete = "Delete from user Where id = ?";
    db.query(sqlDelete, id, (err, result) => {
      if(err) {
        console.log(err);
      } 
      else {
      console.log("Deletado com Sucesso");
      }
    });
  });
  
  
  app.put('/api/update', (req,res) =>{
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
  
    const sqlUpdate = "Update user SET name = ?, email = ?, tel = ? WHERE id = ?";
    db.query(sqlUpdate, [name, email, tel, id], (err, result) =>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  })  

  
  
  
  
app.listen(3001, () =>{
    console.log("Up and Running");
  })

