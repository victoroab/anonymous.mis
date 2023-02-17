import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'))


// initial states
const initialState = {
	user: user ? user: null, 
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
}

// register user
// createAsyncThunk is what is responsible for the asyc logic on the addCase extra reducer parts below
export const Register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
	try{
		// authService.register is the function to register user from authservice file
		return await authService.Register(user)
	} 
	catch(error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	 }
	
})



// logout
export const logout =  createAsyncThunk('auth/logout', async () => {
	await authService.Logout()
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,

	// standard reducer logic, with auto-generated action types per reducer
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = false
			state.message = ''
		}
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle various state as needed
		builder
			// register actions
			.addCase(Register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(Register.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(Register.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.user = null
			})
			// logout
			.addCase(logout.fulfilled, (state) => {
				state.user = null
			})
	}
})

export const {reset} = authSlice.actions
export default authSlice.reducer

