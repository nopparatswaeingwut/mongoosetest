const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const Schema = mongoose.Schema;

let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");

const schema = new Schema({
    a: new Schema({
      b: new Schema({
        test: String
      })
    })
  });

const Model = mongoose.model('Test_owner', schema);
  
const doc = new Model({ 
  a: { b: 'TestOwner' } 
});

  doc.a.b.parent() === doc;
  doc.a.b.parent() === doc.a; 
  doc.a.b.ownerDocument() === doc; 

     // Save_DB
     doc.save(function (err, doc) {
    if (err) return console.error(err);
    console.log( " Save to Test_owner collection.");
  });
});