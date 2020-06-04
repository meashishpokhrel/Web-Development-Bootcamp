//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");
const ejs = require ("ejs");
const mongoose = require ("mongoose");

const app = express();

app.set('view engine', 'ejs');


 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public")); 

 mongoose.connect("mongodb://localhost:27017/wikiDB",{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false});

 const articleSchema = {
    title: String,
    content: String
};

const article = mongoose.model("article",articleSchema);

app.get("/articles",function (req,res){
    article.find({}, function(err, foundArticles){
        res.send(foundArticles);
    });
}); 

app.post("/articles", function(req,res){
    const article1 = new article ({
        title: req.body.title,
        content: req.body.content
    });

    article1.save(function(err){
        if (!err){
            res.send("Succesfully added");
        }
        else{
            res.send(err);
        }
    });
});

app.delete("/articles",function (req,res){
    article.deleteMany({}, function(err){
        if(!err){
            res.send("Succesfully Deleted all");
        }
        else{
            res.send(err);
        }
    });
});


app.listen(3000, function(){
    console.log("listening on 3000 port:");
});
