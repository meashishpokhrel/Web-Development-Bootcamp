
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true , useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
         required: [true,"It must have name!!!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
}); 

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 8,
    review: "Very nice"
});


fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    Age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "Ashish",
    Age: 18
});

//person.save();

const kiwi = new Fruit ({
    name: "KIWI",
    rating: 4,
    review: "Very nice"
});

const banana = new Fruit ({
    name: "banana",
    rating: 4,
    review: "Very nice"
});

const orange = new Fruit ({
    name: "Orange",
    rating: 4,
    review: "Very nice"
});

// Fruit.insertMany([kiwi,banana,orange],function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("sucees");
//     }    

// });

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        // console.log(fruits);
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
        
    }
});

// Fruit.updateOne({_id: "5ec374703fbebd0d347e157f"},{name: "Joker"}, function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
        
//     }
// });

// Fruit.deleteOne({name:"Joker"}, function(err){
//     if (err){ console.log(err);}
//     else {console.log("deleted success");
//     }
// });

Person.deleteMany({name:"Ashish"}, function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log("succes deleted many ashish");
        
    }
        
});