// const Mongoclient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost/27017/TodoApp',{
  useNewUrlParser : true
},(err,client)=>{
  if(err){
    console.log('Could not connect to mongodb');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');
  


  db.collection('Users').find().count().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('Unable to fetch Users',err);
  })

  client.close();
});
