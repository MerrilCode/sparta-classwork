var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;

app.get('/' , function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000 , function(){
  console.log('app is listening');
})

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mongo", function (err, db) {
    
    db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});

MongoClient.connect("mongodb://localhost:27017/mongo", function (err, db) {
    
    db.collection('Persons', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    });
                
});