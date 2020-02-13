const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay===0){
        res.write("It;s the Weekenf Enjoy");
    }
    else{
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(3001, function(){
    console.log("lsiting on 3000");
});
