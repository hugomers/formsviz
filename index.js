const express = require("express")
const http  = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", function(req,res){
    res.redirect("https://wkf.ms/3YdiWxU");
})


server.listen( 5100, function(){
    console.log('Express server listening on port 5100.');
})