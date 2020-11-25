//Core
import React, { useState } from 'react';
//Components
import { Register } from 'components/Auth';
import { Notification } from 'components/Commons';
//Redux
import { authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
	username: '',
	email: '',
	password: '',
	repassword: '',
};

const RegisterPage = () => {
	const [state, setState] = useState(initialState);
	const [progress, setProgress] = useState(20);

	const { error } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) => {
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (state.password !== state.repassword) {
			return alert('BUUUUUUG');
		}

		const { username, email, password } = state;
		const credential = { username, email, password };

		dispatch(authOperations.userSignUp({ credential }));
		setState(initialState);
	};

	return (
		<>
			<Register
				userInfo={state}
				progress={progress}
				onSubmit={handleSubmit}
				onChange={handleChangeState}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default RegisterPage;
