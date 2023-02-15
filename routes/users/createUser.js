const express = require('express')
const router = express.Router()
const createUserHandler = require('../../controllers/users/createUserHandler')

router.post('/', createUserHandler)

module.exports = router
