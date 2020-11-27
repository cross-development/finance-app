//Core
import styled from 'styled-components';
//Icons
import { FaTrashAlt } from 'react-icons/fa';

export const StyledTransactionDate = styled.td`
	text-align: right;
	width: 12%;
`;

export const StyledTransactionType = styled.td`
	text-align: center;
	width: 10%;
`;

export const StyledCategory = styled.td`
	padding-left: 1rem;
`;

export const StyledComment = styled.td`
	padding-left: 2rem;
`;

export const StyledAmount = styled.td`
	color: ${({ type }) => (type === 'INCOME' ? '#24CCA7' : '#FF6596')};
	/* padding-right: 1rem; */
	text-align: right;
	width: 10%;
`;

export const StyledBalanceAfter = styled.td`
	position: relative;
	text-align: center;
	width: 18%;
`;

export const StyledTrashIcon = styled(FaTrashAlt)`
	position: absolute;
	top: 28%;
	right: 10%;
	cursor: pointer;
	color: #8c8c8c;
`;
