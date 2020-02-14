const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

var items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');


 app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    var today = new Date();

    var option={
        weekday:'long',
        day: 'numeric',
        month: 'long'
    };

    var day= today.toLocaleDateString("en-US",option);
    res.render("list",{kindofDay:day,newlistItem:items});
});

app.post("/", function(req,res){
    var item=(req.body.text);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("lsiting on 3000");
});
