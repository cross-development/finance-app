//Core
import axios from 'axios';
//Redux
import authActions from './authActions';

//Axios defaults config
axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

const userSignUp = ({ credential }) => dispatch => {
	dispatch(authActions.userSignUpRequest());
	console.log('from operation ', credential);
	axios
		.post('/api/auth/sign-up', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignUpSuccess(data));
		})
		.catch(error => dispatch(authActions.userSignUpFailure(error)));

	// {
	// 	"username": "string",
	// 	"email": "string",
	// 	"password": "string"
	//   }
};

const userSignIn = credential => dispatch => {
	dispatch(authActions.userSignInRequest());

	axios
		.post('/api/auth/sign-in', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignInSuccess(data));
		})
		.catch(error => dispatch(authActions.userSignInFailure(error)));

	// {
	// 	"email": "string",
	// 	"password": "string"
	//   }
};

const userSighOut = () => dispatch => {
	dispatch(authActions.userSighOutRequest());

	axios
		.delete('/api/auth/sign-out')
		.then(() => {
			token.unset();
			dispatch(authActions.userSighOutSuccess());
		})
		.catch(error => dispatch(authActions.userSighOutFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/api/users/current')
		.then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
		.catch(error => dispatch(authActions.getCurrentUserFailure(error)));

	// {
	// 	"id": "string",
	// 	"username": "string",
	// 	"email": "string",
	// 	"balance": 0
	//   }
};

const authOperations = { userSignUp, userSignIn, userSighOut, getCurrentUser };

export default authOperations;
