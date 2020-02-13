const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


// app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day="";

    if (currentDay === 0){
        day = "Sunday";
    }
    else if(currentDay === 1){
        day ="Monday";
    }
    else if(currentDay === 2){
        day ="Tuesday";
    }
    else if(currentDay === 3){
        day ="Wedneday";
    }
    else if(currentDay === 4){
        day ="Thursday";
    }
    else if(currentDay === 5){
        day ="Friday";
    }
    else if(currentDay === 6){
        day ="Saturday";
    }

    res.render("list",{kindofDay:day});
});


app.listen(3000, function(){
    console.log("lsiting on 3000");
});