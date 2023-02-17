const mongoose = require('mongoose')

const dbUri =
  'mongodb+srv://boluajayi:bolu123@wbps.ea7oow1.mongodb.net/?retryWrites=true&w=majority'

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
