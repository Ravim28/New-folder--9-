const express = require('express');
 const app = express();


 app.get('/get' ,(req, res) => {
    res.send("hello world");
 })
 
  app.get('/send' ,(req, res) => {
    res.send("hello world harda");
 })
 app.listen(3000 ,()=>{
    console.log("Server is running on port 3000");
 })



 const a   =  new Promise ((resolve , reject) => {
     // Change this to false to test rejection
    if(true){
        resolve("done")
    }
    else{
        reject("error")
    }
 })
 a.then((data)=>{
    console.log(data);})
    a.catch((err)=>{
        console.log(err);
    })