import axios from 'axios'

const API_URL = 'http://localhost:3500/api/'

// create new message
const createMessage = async (messageData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL+'/messages', messageData, config)

	return response.data
}

// get user messages
const getMessages = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL+ '/view-messages', config)

	return response.data
}




const messageService = {
	createMessage,
	getMessages,
	
}


export default messageService