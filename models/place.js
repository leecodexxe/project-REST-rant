const mongoose = require('mongoose')
const { Schema } = mongoose 
const placeSchema = new Schema({
  name: { type: String, require: true },
  pic: { type : String , default : 'http://placekitten.com/400/300'},
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  cuisines: { type: String, require: true },
  founded: {
    type:Number,
    min:[1673, "Surely not that old?!"],
    max:[new Date().getFullYear(),"Hey, this year is in the future!"]
  }
})

//help methods
placeSchema.methods.showEstablished = function(){
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}



const Place = mongoose.model('Place', placeSchema)
module.exports = Place;
