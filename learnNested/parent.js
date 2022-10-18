const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const Schema = mongoose.Schema;

let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
  const schema = new Schema({
    test_a: [{ name: String }],
    test_b: new Schema({ name: String })
  });
  const Model = mongoose.model('Test_Parent', schema);
  
  const doc = new Model({
    test_a: [{ name: 'TEST_1' }],
    test_b: { name: 'TEST_2' }
  });
  
  doc.test_b.parent() === doc;
  doc.test_a[0].parent() === doc;
 
     // Save_DB 
     doc.save(function (err, doc) {
    if (err) return console.error(err);
    console.log( " Save to Test_Parent collection.");
  });
  
});