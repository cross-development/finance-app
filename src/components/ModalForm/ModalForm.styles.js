//Core
import styled from 'styled-components';

export const StyledModalWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: #fff;
	padding: 2.5rem 4rem 2rem;
	width: 35%;
	/* height: 80%; */
	border: none;
	border-radius: 20px;
	position: relative;
`;

export const StyledCloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 15px;
	font-size: 26px;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.7);
`;

export const StyledFormTitle = styled.h2`
	font-size: 1.8em;
	font-weight: 400;
	margin-bottom: 0.5rem;
	text-align: center;
`;

export const StyledInputsWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;
`;
