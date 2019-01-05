// var user = {name:'asim',lname:'Katamale'};
// var {name} = user;
// console.log(name);


const Mongoclient = require('mongodb').MongoClient;
Mongoclient.connect('mongodb://localhost/27017/TodoApp',{
  useNewUrlParser : true
},(err,client)=>{
  if(err){
    console.log('Could not connect to mongodb');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');
  db.collection('Users').insertOne({
    name:"Asim Katamale",
    location:"Bangalore"
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert user' +err);
    }
    console.log(result.ops);
  });
  client.close();
});
