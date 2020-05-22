const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");


const app = express();

app.set('view engine', 'ejs');


 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public")); 

mongoose.connect("mongodb://localhost:27017/tolistDB",{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false});

const itemSchema = new mongoose.Schema({
    name: String
});

const item= mongoose.model("item",itemSchema);

const item1 = new item ({
    name: "welcome to do the list"
});

const item2 = new item ({
    name: "This is refrshing add a item"
});

const item3 = new item ({
    name: "Delete an item"
});

const defaultItems = [item1, item2, item3];



// item.find(function(err, items){
//     if (err){
//         console.log(err);
//     }
//     else{
//         items.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
// });


app.get("/",function(req,res){
    
    item.find({}, function(err, itemsFound){
        if (itemsFound.length === 0){
            item.insertMany(defaultItems,function(err){
                 if (err){
                     console.log(err);
                      }
                     else{
                     console.log("successfully added to the database");
                        }
                        });
                        res.redirect("/");
        }
        else{
            res.render("list",{listTitle:"Today",newlistItem:itemsFound});
        }   
    });
});

app.post("/", function(req,res){
    const itemName=(req.body.text);

    const addedItem = new item({
        name: itemName
    });
    addedItem.save();
    res.redirect("/");
});

app.post("/delete", function(req,res){
    const checkedId = (req.body.checkbox);
    item.findByIdAndRemove(checkedId, function(err){
        if (!err){
        console.log("delete success");
        res.redirect("/");
        }
    });    
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newlistItem:workList})
});


app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("lsiting on 3000");
});
