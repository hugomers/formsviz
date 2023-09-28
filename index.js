const express = require("express")
const http  = require("http");

const app = express();
const server = http.createServer(app);

// app.get("/", function(req,res){
//     res.redirect("https://wkf.ms/3YdiWxU");// evaluacion de mochila
// })


app.get("/juguete", function(req,res){
    res.redirect("https://wkf.ms/3PD6LXk");// evaluacion de mochila
})

app.get("/calculadora", function(req,res){
    res.redirect("https://forms.monday.com/forms/4f441a1259f1cb4ff3a4ab517c5f40dc?r=use1");// evaluacion de mochila
})

app.get("/luces", function(req,res){
    res.redirect("https://forms.monday.com/forms/5910248434744eb5778893b4b369f41b?r=use1");// evaluacion de mochila
})


server.listen( 5100, function(){
    console.log('Express server listening on port 5100.');
})