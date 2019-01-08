const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/27017/TodoApp',{
  useNewUrlParser:true
},(err,client)=>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to server');
  client.close();
});
