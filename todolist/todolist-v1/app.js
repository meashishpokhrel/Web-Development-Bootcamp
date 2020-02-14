const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

let items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');


 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public"));

app.get("/",function(req,res){
    let today = new Date();

    let option={
        weekday:'long',
        day: 'numeric',
        month: 'long'
    };

    let day= today.toLocaleDateString("en-US",option);
    res.render("list",{kindofDay:day,newlistItem:items});
});

app.post("/", function(req,res){
    let item=(req.body.text);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("lsiting on 3000");
});
