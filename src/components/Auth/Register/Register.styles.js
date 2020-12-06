//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import EllipseBlue from 'assets/EllipseBlue.png';
import EllipseOrange from 'assets/EllipseOrange.png';
import Promo2 from 'assets/walletPromo2.png';

export const StyledRegisterWrap = styled.div`
	height: 100vh;
	width: 100%;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		background-color: #e7eaf2;
		background-image: url(${EllipseBlue});
		background-repeat: no-repeat;
		background-position: bottom left;
		background-size: 40%;
	}
`;

export const StyledPromoWrap = styled.div`
	@media (min-width: 768px) {
		width: 70%;
		height: 25vh;
		background-image: url(${Promo2});
		background-repeat: no-repeat;
		background-position: left;
		background-size: contain;
	}

	@media (min-width: 1440px) {
		height: 60vh;
		background-position: center;
	}
`;

export const StyledContainer = styled.div`
	@media (min-width: 768px) {
		background-image: url(${EllipseOrange});
		background-repeat: no-repeat;
		background-position: top right;
		background-size: 70%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		/* padding-top: 5rem; */
	}

	@media (min-width: 1440px) {
		flex-direction: row;
		padding-top: 0;
		background-size: 50%;
	}
`;

export const StyledFormWrap = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 768px) {
		height: auto;
		width: 70%;
	}

	@media (min-width: 1440px) {
		height: 100vh;
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(8px);
	}
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	width: 100%;

	@media (min-width: 768px) {
		justify-content: flex-start;
		background-color: #fff;
		border: none;
		border-radius: 20px;
	}

	@media (min-width: 1440px) {
		width: 60%;
	}
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

export const StyledInput = styled(Field)`
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
	width: 100%;
	margin: 0 auto;
	font-size: 1.1em;
	text-transform: uppercase;
	margin-bottom: 1rem;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
	}

	@media (min-width: 1440px) {
		width: 50%;
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
	width: 100%;
	margin: 0 auto;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.1em;
	text-decoration: none;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
	}

	@media (min-width: 1440px) {
		width: 50%;
	}
`;
