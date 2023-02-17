import axios from 'axios'

const API_URL = 'http://localhost:3500/api/'

// create new message
const createMessage = async (contents) => {
  // const config = {
  // 	headers: {
  // 		Authorization: `Bearer`
  // 	}
  // }

  const response = await axios.post(API_URL + 'messages', contents)

  return response.data
}

// get user messages
const getMessages = async () => {
  const config = {
    headers: {
      Authorization: `Bearer`,
    },
  }

  const response = await axios.get(API_URL + 'view-messages', config)

  return response.data
}

const messageService = {
  createMessage,
  getMessages,
}

export default messageService
