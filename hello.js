/*const http = require("http");

const req = http.request("http://www.google.com",(res) =>{
     res.on('data' , (chunk)=>{
         console.log(`Chunk Data : ${chunk}`)
     });
     res.on('end' , () => {
        console.log("No more data");
     });
});
 xcvjbsdj
req.end();*/

const { response } = require("express");
const express = require("express");

const app = express();

app.get("/" , function(request,response){
   response.send("Hello");
});

app.get("/about" , function(req,res){
    res.send("Hello My name is Priyansh Malik And I am a software engineer");
})

app.listen(3000, function(){
    console.log("Server has been setup at 3000");
});