const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
const Schema = mongoose.Schema;

let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");

  const BookSchema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
  }
  
  );
  const userSchema = new mongoose.Schema({
    fullName: {
      type: String},

   categoriesData: {
        detiall: [BookSchema],
    },
  },
  );
  const user = mongoose.model('User', userSchema, 'User');
  const user1 = new user({ fullName:'abcdefg',
                            name: 'Test_1', 
                           price: 10, 
                           quantity: 25 });
 

  Insert_DB
  user1.save(function (err, user) {
    if (err) return console.error(err);
    console.log(user.fullName + " saved to User collection.");
  });

  //TEST_1

  // const postSchema = new Schema({
  //   title: String,
  //   content: String,
  //   author: { type: String, ref: 'User' }
  // });
  // module.export = mongoose.model('Post', postSchema);
  
  // const userSchema = new Schema({
  //   name: String,
  //   posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}]
  // });
  // module.export = mongoose.model('User', userSchema);

// TEST_1

});
