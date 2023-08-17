const mongoose = require('mongoose');

// TO-DO: CONNECT TO DB
const MONGO_URI = 'YOUR_URI_HERE';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'sheets'
})
  .then(() => console.log('Connected to Mongo DB: SheetModels.js'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const sheetSchema = new Schema({
  name: String,
  concept: String,
  chronicle: String,
  ambition: String,
  desire: String,
  predatorType: String,
  clan: String,
  generation: String,
  sire: String
});

// creates a model for the 'species' collection that will be part of the export
const Sheet = mongoose.model('sheets', sheetSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Sheet
};
