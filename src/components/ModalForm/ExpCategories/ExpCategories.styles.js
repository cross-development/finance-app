//Core
import styled from 'styled-components';

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	color: #5b6378;
	margin-bottom: 3rem;
`;

export const StyledSelect = styled.select`
	display: block;
	width: 100%;
	padding: 0.3rem 0.8rem;
	border: none;
	border-bottom: 2px solid #e0e0e0;
	outline: none;
	margin: 0.8rem 0 0;

	&:first-child {
		font-size: 1em;
		color: #bdbdbd;
	}

	& option:not(:first-child) {
		color: #000;
	}
`;
