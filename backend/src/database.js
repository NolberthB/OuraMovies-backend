import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

const uri = 'mongodb+srv://NolberthB:5416330@ouramovies.kz3i9rm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db) => console.log('database connected successfully ...'))
  .catch(err => console.log(err))
