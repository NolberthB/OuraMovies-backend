import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  overview: {
    type: String
  }

})

export default mongoose.model('Movie', movieSchema)
