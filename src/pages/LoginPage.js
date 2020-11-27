//Core
import React, { useState } from 'react';
//Components
import { Login } from 'components/Auth';
import { Error } from 'components/Commons';
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

		dispatch(authOperations.userSignIn({ ...state }));
		setState(initialState);
	};

	return (
		<>
			<Login {...state} onSubmit={handleSubmit} onChange={handleChangeState} />

			{error && <Error message={error.message} />}
		</>
	);
};

export default LoginPage;
