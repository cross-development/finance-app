//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EllipseBlue from 'assets/EllipseBlue.png';
import EllipseOrange from 'assets/EllipseOrange.png';

export const StyledRegisterWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: #e7eaf2;
`;

export const StyledLogoWrap = styled.div`
	background-image: url(${EllipseBlue});
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: contain;
	width: 40%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledPromoImg = styled.img`
	width: 70%;
	height: auto;
`;

export const StyledBackdrop = styled.div`
	background-image: url(${EllipseOrange});
	background-repeat: no-repeat;
	background-position: top;
	background-size: contain;
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledFormWrap = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px);
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: #fff;
	padding: 2rem 3rem;
	width: 60%;
	height: 80%;
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

	&:nth-of-type(3) {
		margin-bottom: 0.5rem;
	}

	&:last-of-type {
		margin-bottom: 3rem;
	}
`;

export const StyledInput = styled.input`
	display: block;
	color: #171718;
	font-size: 1.1em;
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
