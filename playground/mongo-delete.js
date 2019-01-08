const mongodb = require('./mongo-db-connect.js');
mongodb.connect.then(dbObject=>{
  const db = dbObject.db('TodoApp');
  db.collection('Products').deleteMany({id:1}).then((result)=>{
  },(err)=>{
    console.log('Unable to delete users',err)
  })
}).catch(error=>{
  console.log(error);
});
