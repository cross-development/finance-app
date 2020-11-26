//Core
import styled from 'styled-components';
//Icons
import { FaTrashAlt } from 'react-icons/fa';

export const StyledTd = styled.td`
	position: relative;
`;

export const StyledTrashIcon = styled(FaTrashAlt)`
	position: absolute;
	top: 28%;
	right: 10%;
	cursor: pointer;
	color: #8c8c8c;
`;
