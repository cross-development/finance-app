//Core
import React from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
//Styles
import { StyledIcon, StyledSignOut } from './AuthMenu.styles';
import { StyledAuthMenuWrap, StyledUserName } from './AuthMenu.styles';

const AuthMenu = () => {
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleUserSignOut = () => dispatch(authOperations.userSighOut());

	return (
		<StyledAuthMenuWrap>
			<StyledUserName>{user.username}</StyledUserName>

			<StyledIcon />

			<StyledSignOut to="/login" onClick={handleUserSignOut}>
				Выйти
			</StyledSignOut>
		</StyledAuthMenuWrap>
	);
};

export default AuthMenu;
