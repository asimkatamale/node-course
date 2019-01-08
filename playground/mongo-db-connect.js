const MongoClient = require('mongodb').MongoClient;

 const connect = () => {
   return new Promise((resolve, reject) => {
     MongoClient.connect('mongodb://localhost/27017/TodoApp',{
       useNewUrlParser:true
     },(err,client) => {
       if(err){
        return reject(err);
       }
       // client.db('TodoApp');
       return resolve(client);
     });
   });
 };

module.exports.connect = connect();
