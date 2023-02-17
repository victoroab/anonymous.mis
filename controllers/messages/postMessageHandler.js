const Message = require('../../models/messages/messages')

const postMessageService = async ({ message, username }) => {
  try {
    await Message.create({
      content: message,
      username,
    })
  } catch (e) {
    console.log(e)
  }
}

const postMessageHandler = async (req, res) => {
  const { message, username } = req.body

  try {
    await postMessageService({ message, username })
    res.status(201).json({ msg: 'sent' })
  } catch (e) {
    console.log(e)
  }
}

module.exports = postMessageHandler
