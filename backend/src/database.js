import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

const URI = 'mongodb+srv://NolberthB:5416330@ouramovies.kz3i9rm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('database connected successfully')
}).catch(error => {
  console.error('Error connection to MongoDB', error.message)
})
