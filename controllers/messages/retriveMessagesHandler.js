const Message = require('../../models/messages/messages')

const retriveMessageService = async () => {
  try {
    const allMessages = await Message.find(
      {},
      { content: 1, username: 1, _id: 0 }
    )
    return allMessages
  } catch (e) {
    console.log(e)
  }
}

const retriveMessageHandler = async (req, res) => {
  try {
    const messages = await retriveMessageService()
    res.status(200).json({ messages })
  } catch (e) {
    console.log(e)
  }
}

module.exports = retriveMessageHandler
