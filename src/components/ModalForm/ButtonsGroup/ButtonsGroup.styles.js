//Core
import styled from 'styled-components';

export const StyledButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	/* align-items: center;
	justify-content: center; */
`;

export const StyledButton = styled.button`
	background-color: ${({ type }) => (type === 'submit' ? '#24cca7' : 'transparent')};
	border: ${({ type }) => (type === 'submit' ? 'none' : '1px solid #4a56e2')};
	color: ${({ type }) => (type === 'submit' ? '#fff' : '#4a56e2')};
	border-radius: 20px;
	padding: 0.5rem 0;
	cursor: pointer;
	transition: all 250ms linear;
	outline: none;
	width: 40%;
	margin: 0 auto;
	font-size: 1em;
	text-transform: uppercase;
	margin-bottom: ${({ type }) => (type === 'submit' ? '1rem' : '0')};

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
	}
`;
