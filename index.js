var mongodb = require('mongodb');

// Create a connection
var server = new mongodb.Server('127.0.0.1', '27017', {});
var client = new mongodb.Db('mydb', server, {w:1});

client.open(function(error) {
   if (error) throw error;
   // Create mongoDB collection
   client.collection('mongocrud', function (error, collection) {
       if (error) throw error;
       console.log('Connection OK, ready to perform operations');

       // Create, insert Operation
       collection.insert(
           {
               "name": "Linda",
               "age": 22
           },
           {safe:true},
           function(error, document) {
               if (error) throw error;
               console.log(document);
           }
       );

       // Find document
       collection.find({"name": "Peter"}).toArray (
           function (error, results) {
               if (error) {
                   throw error;
               }
               console.log(results)
           }
       )
   })
})
