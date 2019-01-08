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
  // db.collection('Products').insertOne({
  //   id:"1",
  //   product_name:"Shirt"
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user' +err);
  //   }
  //   console.log(result.ops);
  // });


  db.collection('Products').insertMany(
    [
      {
        id:'4',
        name:'Product Name4'
      },
      {
        id:'5',
        name:'Product Name5'
      },
      {
        id:'6',
        name:'Product Name6'
      }
    ],(err,result)=>{
      if(err){
        return console.log('Unable to insert products',err);
      }
      console.log(JSON.stringify(result,undefined,2));
    }
  )
  client.close();
});
