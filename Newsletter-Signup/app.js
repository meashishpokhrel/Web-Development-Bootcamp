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
        console.log(err);
    }
    else{
        console.log(resp.statusCode);
    }
});

}); 
  
app.listen(3000, function(){
    console.log("listening 3000 port");
});


//    c00364eb700ba3661f66f6c9b7125192-us4
//  895b379718