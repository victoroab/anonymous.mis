const express = require('express')
const retriveMessageHandler = require('../../controllers/messages/retriveMessagesHandler')
const router = express.Router()

router.get('/', retriveMessageHandler)

module.exports = router
