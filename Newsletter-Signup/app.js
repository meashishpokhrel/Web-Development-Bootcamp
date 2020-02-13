const express = require ('express');
const bodyParser = require ('body-parser');
const request = require ('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function (req,res) {
    res.sendFile(__dirname + "/signup.html" );
  });
app.post("/",function(req,res){
    var fname = (req.body.fn);
    var lname = (req.body.ln);
    var email = (req.body.email);
    //console.log(fname, lname, email);
 
        var data={
        members:[
        {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME: fname,
                LNAME: lname
            }


        }
    ]
    };


var jsonData=JSON.stringify(data);


var options={
    url: "https://us4.api.mailchimp.com/3.0/lists/895b379718",
    method: "POST",
    headers:{

        "Authorization":"boltar c00364eb700ba3661f66f6c9b7125192-us4"
    },
    body:jsonData,
};
request(options, function(err, resp, body){
    if (err){
        res.sendFile(__dirname + "/failure.html");
    }
    else{
        if(resp.statusCode == 200){
            res.sendFile(__dirname + "/success.html" );
        }
        else{
            console.log(resp.statusCode);
            res.sendFile(__dirname + "/failure.html" );        }
        
    }
});

}); 

app.post("/failure", function (req,res) { 
    res.redirect("/");
 });
  
app.listen(process.env.PORT || 3000, function(){
    console.log("listening 3000 port");
});

//  API KEY
//    c00364eb700ba3661f66f6c9b7125192-us4
//    c00364eb700ba3661f66f6c9b7125192-us4

//  List id
//  895b379718