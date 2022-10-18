const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const Schema = mongoose.Schema;

let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
  
  const childSchema = new mongoose.Schema({
    fullname: {
        type:String,
        default:'Test_fullname'
       },
       nickname: {
        type:String,
        default:'Test_Tom' 
        },
        age: {
          type: Number,
          default: 26
        }
  });

  const nestedSchema = new mongoose.Schema({
    child: { fullname: String, 
             age: Number,
             nickname:String, 
              type: childSchema,
              default: () => ({})
           }
  });
  
  const Nested = mongoose.model('Nested', nestedSchema);

    const doc = new Nested({});
    doc.child === undefined;  
    console.log(doc.child); 
  
    doc.child.fullname = 'Mr.Helloworld',
    doc.child.nickname = 'tom',
    doc.child.age = 23 ;  
    console.log(mongoose.Query.name)
     // Save_DB
     doc.save(function (err, doc) {
    if (err) return console.error(err);
    console.log( " Save to test collection.");
  });
  
});