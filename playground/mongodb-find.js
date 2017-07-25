const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if(err) {
        return console.log("Unable to connect to Mongo DB server");
    } 
    
    db.collection('Users').find({name: "Mona"}).toArray().then((docs) => {
        console.log('Todos');        
        console.log(JSON.stringify(docs));
    }, (err) => {
        console.log("Unable to fetch data");
    });
    
    //db.close();
});