//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StylesNavigationWrap = styled.div`
	/* width: 80%; */
	/* margin: 0 auto; */
`;

export const StyledNavigation = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const StyledNavItem = styled.li`
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	width: 100%;
	list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: #000;

	&.active {
		font-weight: 700;
	}
`;
