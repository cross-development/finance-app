//Core
import React, { useState } from 'react';
//Components
import { Login } from 'components/Auth';
import { Notification } from 'components/Commons';
//Redux
import { authOperations } from 'redux/auth';
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
	email: '',
	password: '',
};

const LoginPage = () => {
	const [state, setState] = useState(initialState);

	const { error } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		console.log(state);

		dispatch(authOperations.userSignIn({ ...state }));
		setState(initialState);
	};

	return (
		<>
			<Login {...state} onSubmit={handleSubmit} onChange={handleChangeState} />

			{error && <Notification message={error.message} />}
		</>
	);
};

export default LoginPage;
