import axios from 'axios'

const API_URL = 'http://localhost:3500/api'

axios.defaults.withCredentials = true

// register student

const Register = async(userData) => {
	const response = await axios.post(`${API_URL}/users`, userData)

	if(response.data){
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

// logout
const Logout = () => {
	localStorage.removeItem('user')
}


const authService = {
	Register,
	Logout,
}

export default authService