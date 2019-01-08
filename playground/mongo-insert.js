const mongodb = require('./mongo-db-connect.js');

mongodb.connect.then(dbObject => {
  const db = dbObject.db('TodoApp');
  db.collection('Products').insertMany([
    {
      id:1,
      product_name:'First Product'
    },
    {
      id:2,
      product_name:'Second Product'
    },
    {
      id:3,
      product_name:'Third Product'
    },
    {
      id:4,
      product_name:'Fourth Product'
    }
  ]);
  dbObject.close();
  // console.log(dbObject.db);
}).catch(error => {
  console.log(error)
});

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost/27017/TodoApp',{
//   useNewUrlParser:true
// },(err,client)=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log('Connected to server');
//   const db = client.db('TodoApp');
//   db.collection('Products').insertMany([
//     {
//       id:'1',
//       product_name:'Product Name One'
//     },
//     {
//       id:'2',
//       product_name:'Product Name Two'
//     },
//     {
//       id:'3',
//       product_name:'Product Name Three'
//     },
//     {
//       id:'4',
//       product_name:'Product Name Four'
//     }
//   ],(err,result)=>{
//     if(err){
//       console.log('Unable to insert user' ,err);
//     }
//   })
//   client.close();
// });




// const db = client.db('TodoApp');
//   db.collection('Products').insertOne({
//     id:"1",
//     product_name:"Shirt"
//   },(err,result)=>{
//     if(err){
//       return console.log('Unable to insert user' +err);
//     }
//     console.log(result.ops);
//   });


//
//
// // var user = {name:'asim',lname:'Katamale'};
// // var {name} = user;
// // console.log(name);
//
//
// const Mongoclient = require('mongodb').MongoClient;
// Mongoclient.connect('mongodb://localhost/27017/TodoApp',{
//   useNewUrlParser : true
// },(err,client)=>{
//   if(err){
//     console.log('Could not connect to mongodb');
//   }
//   console.log('Connected to server');
//   const db = client.db('TodoApp');
//   // db.collection('Products').insertOne({
//   //   id:"1",
//   //   product_name:"Shirt"
//   // },(err,result)=>{
//   //   if(err){
//   //     return console.log('Unable to insert user' +err);
//   //   }
//   //   console.log(result.ops);
//   // });
//
//
//   db.collection('Products').insertMany(
//     [
//       {
//         id:'4',
//         name:'Product Name4'
//       },
//       {
//         id:'5',
//         name:'Product Name5'
//       },
//       {
//         id:'6',
//         name:'Product Name6'
//       }
//     ],(err,result)=>{
//       if(err){
//         return console.log('Unable to insert products',err);
//       }
//       console.log(JSON.stringify(result,undefined,2));
//     }
//   )
//   client.close();
// });
