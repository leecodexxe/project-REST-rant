const mongoose = require('mongoose')
const { Schema } = mongoose 
const placeSchema = new Schema({
  name: { type: String, require: true },
  pic: { type : String , default : 'http://placekitten.com/200/300'},
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  cuisines: { type: String, require: true },
  founded: Number
})

const Place = mongoose.model('Place', placeSchema)
module.exports = Place;
