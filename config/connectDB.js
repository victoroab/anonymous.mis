const mongoose = require('mongoose')
// const dbUri = 'mongodb://127.0.0.1:27017/anoyomousMIS'
const dbUri =
  'mongodb+srv://boluajayi:bolu123@wbps.ea7oow1.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('connected to mongodb')
  } catch (e) {
    console.log(e)
    // process.exit(1)
  }
}

module.exports = connectDB
