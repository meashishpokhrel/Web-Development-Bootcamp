const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/',function(req,res){
    var num1 = Number(req.body.n1);
    var num2= Number(req.body.n2);
    var sum=num1+num2;
    
    res.send("the result is" + sum);
});

app.listen(3000);
