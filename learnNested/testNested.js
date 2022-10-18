const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const Schema = mongoose.Schema;

let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
 
//Test

// const childSchema = new Schema({ name: 'string' });
// const Child = mongoose.model('Child', childSchema);

// const parentSchema = new Schema({
//   child: {
//     type: mongoose.ObjectId,
//     ref: 'Child'
//   }
// });
// const Parent = mongoose.model('Parent', parentSchema);

// const doc =  Parent.findOne().populate('child');

// doc.child;


//Test

  const childSchema = new mongoose.Schema({
    fullname: {
        type:String,
        default:'Mr.Hello world'
       },
    name: {
        type:String,
        default:'Tom' 
     },
    age: {
      type: Number,
      default: 23
    }
  });
  const subdocumentSchema = new mongoose.Schema({
    child: {
      type: childSchema,
      default: () => ({})
    }
  });

  const user = mongoose.model('user_test', subdocumentSchema, 'User_test');
  const user1 = new user({});
 
  // Insert_DB
  user1.save(function (err, user) {
    if (err) return console.error(err);
    console.log( " saved to User_test collection.");
  });

});
