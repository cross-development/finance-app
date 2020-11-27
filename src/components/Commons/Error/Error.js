//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
// import { useDispatch } from 'react-redux';
// import { unsetErrorMessage } from 'redux/auth/authOperations';
//Styles
import { StyledErrorDiv, StyledErrorP, StyledErrorBtn } from './Error.styles';

const Error = ({ message }) => {
	// const dispatch = useDispatch();

	// const handleCloseErrorWindow = () => dispatch(unsetErrorMessage());
	//onClick={handleCloseErrorWindow}

	return (
		<StyledErrorDiv>
			<StyledErrorBtn>&#10006;</StyledErrorBtn>
			<StyledErrorP>{message}</StyledErrorP>
		</StyledErrorDiv>
	);
};

Error.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Error;
