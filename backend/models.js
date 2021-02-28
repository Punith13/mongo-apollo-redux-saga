const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = mongoose.Schema.Types

const citySchema = new Schema(
  {
    city: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
      },
    },
  }
)

const City = mongoose.model('City', citySchema, 'cities')

const placeSchema = new Schema(
  {
    place: { type: String, required: true },
    cityId: { type: ObjectId, ref: 'City', required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
      },
    },
  }
)

const Place = mongoose.model('Place', placeSchema, 'places')

module.exports = { City, Place }
