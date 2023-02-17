const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const messagesSchema = new mongoose.Schema(
  {
    messageId: {
      type: String,
      required: true,
      unique: true,
      default: () => `message_${uuidv4()}`,
    },
    content: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Messages = mongoose.model('messages', messagesSchema)

module.exports = Messages
