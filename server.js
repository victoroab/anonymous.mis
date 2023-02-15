require('dotenv').config
const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3500
const connectDB = require('./config/connectDB')

//route imports
const healthCheck = require('./routes/health-check')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/health-check', healthCheck)
app.use('/api/users', require('./routes/users/createUser'))

app.listen(PORT, () => {
  connectDB()
  console.log(`server listening on port ${PORT}`)
})
