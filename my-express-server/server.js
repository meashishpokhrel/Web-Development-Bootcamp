const express = require("express");

const app= express();

app.get('/', function(request,response){
    response.send("hello world");
})
app.get('/contact', function(request,response){
    response.send("Contact me @ ashish.com.np");
})

app.get('/about', function(request,response){
    response.send("my bio will be lsited here");
})
app.listen(3000, function(){
    console.log("server has started on 30000");
});