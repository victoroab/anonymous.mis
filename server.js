require('dotenv').config
const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3500
const connectDB = require('./config/connectDB')
const cors = require('cors')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsConfig/corsOptions')

//route imports
const healthCheck = require('./routes/health-check')

app.use(credentials)
app.use(cors(corsOptions))

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/health-check', healthCheck)

//api-routes
app.use('/api/users', require('./routes/users/createUser'))
app.use('/api/messages', require('./routes/messages/postMessage'))
app.use('/api/view-messages', require('./routes/messages/reteriveMessage'))

//server
app.listen(PORT, () => {
  connectDB()
  console.log(`server listening on port ${PORT}`)
})
