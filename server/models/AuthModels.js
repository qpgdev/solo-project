const mongoose = require('mongoose');

// TO-DO: CONNECT TO DB
const MONGO_URI = 'mongodb+srv://qpg:fXEIxqhdPL68vsGM@codesmith-solo-project.llowjoh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'users'
})
  .then(() => console.log('Connected to Mongo DB: AuthModels.js'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// creates a model for the 'species' collection that will be part of the export
const User = mongoose.model('users', userSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  User
};
