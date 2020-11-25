//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogoWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const StyledLogo = styled.img`
	display: block;
	width: 40px;
	height: 40px;
	margin-right: 1rem;
`;

export const StyledLogoLink = styled(Link)`
	text-decoration: none;
	color: #000;
	font-weight: 700;
	font-size: 30px;
	line-height: 34px;
`;
