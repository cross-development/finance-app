//Core
import styled from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const StyledAuthMenuWrap = styled.div`
	color: #bdbdbd;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const StyledIcon = styled(FaSignOutAlt)`
	margin: 0 0.8rem 0 1rem;
`;

export const StyledUserName = styled.p`
	border-right: 1px solid #bdbdbd;
	padding-right: 1rem;
`;

export const StyledSignOut = styled(Link)`
	text-decoration: none;
	color: #bdbdbd;
`;
