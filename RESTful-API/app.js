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
app.route("/articles")

.get(function (req,res){
    article.find({}, function(err, foundArticles){
        res.send(foundArticles);
    });
})

.post(function(req,res){
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
})

.delete(function (req,res){
    article.deleteMany({}, function(err){
        if(!err){
            res.send("Succesfully Deleted all");
        }
        else{
            res.send(err);
        }
    });
});
//////////////////Specific Articles route////////
app.route("/articles/:articleTitle")

.get(function(req,res){
    article.findOne({ title: req.params.articleTitle }, function(err, foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }
        else{
            res.send("hi err");
        }
    });
})

//PUT is for updating sll the content i.e
// If i were to replace only name and leave the 
// content as it is then it is not possible in PUT for that we use PATCH.

.put(function(req,res){
    article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content:req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Success in PUT");
            }
            else{
                res.send("Fail");
            }
        }
    );
})

.patch(function(req,res){
    article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Success in PATCH");
            }
        }
    );
})

.delete(function(req,res){
    article.deleteOne({title: req.params.articleTitle}, function(err){
        if(!err){
            res.send("Success in DElete")
        }
    });
});

app.listen(3000, function(){
    console.log("listening on 3000 port:");
});
