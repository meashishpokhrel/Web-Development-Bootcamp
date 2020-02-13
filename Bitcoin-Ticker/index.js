const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/",function(req,res){

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";
    finalURL = baseURL + crypto + fiat;
    request(finalURL, function(error, response, body){
        var data = JSON.parse(body);
        var price = data.averages.week;

        var currentDate = date.display__timestamp;

        res.write("<p>THe current date is " + currentDate + "</p>")

        res.write("<h1>the price of " + crypto + " is " + price + fiat + " USD</h1>")

        res.send();
        // console.log(price);
    });
    // console.log(req.body.cry);
});

app.listen(3000, function(){
    console.log("lsiting on 3000");
});
