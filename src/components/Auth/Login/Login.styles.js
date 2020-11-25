//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLoginWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
	background-color: #e7eaf2;
`;

export const StyledLogoWrap = styled.div`
	width: 40%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const StyledPromoImg = styled.img`
	width: 70%;
	height: auto;
`;

export const StyledFormWrap = styled.div`
	width: 60%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.4);
	filter: blur(40%);
`;

export const StylesForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: #fff;
	padding: 2rem 3rem;
	width: 60%;
	height: 60%;
	border: none;
	border-radius: 20px;
`;

export const StyledH1 = styled.h1`
	font-size: 2em;
	font-weight: 700;
	margin-bottom: 0.5rem;
	text-align: center;
`;

export const StyledLabel = styled.label`
	display: block;
	margin-top: 2rem;

	&:last-of-type {
		margin-bottom: 3rem;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1rem;
	padding: 6px 20px;
	margin-top: 0.2rem;
	border: none;
	border-bottom: 2px solid #e0e0e0;
	width: 100%;
	outline: 0;
`;

export const StyledButton = styled.button`
	background-color: #24cca7;
	border: none;
	color: #fff;
	border-radius: 20px;
	padding: 0.7rem 0;
	cursor: pointer;
	transition: all 250ms linear;
	outline: none;
	width: 50%;
	margin: 0 auto;
	font-size: 1.1em;
	text-transform: uppercase;
	margin-bottom: 1rem;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
	}
`;

export const StyledLink = styled(Link)`
	background-color: transparent;
	border: 1px solid #4a56e2;
	color: #4a56e2;
	border-radius: 20px;
	padding: 0.7rem 0;
	cursor: pointer;
	transition: all 250ms linear;
	outline: none;
	width: 50%;
	margin: 0 auto;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.1em;
	text-decoration: none;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
	}
`;
