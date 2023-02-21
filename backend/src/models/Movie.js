import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String
  }
})

export default model('Movie', movieSchema)
