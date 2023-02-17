const express = require('express')
const postMessageHandler = require('../../controllers/messages/postMessageHandler')
const router = express.Router()

router.post('/', postMessageHandler)

module.exports = router
