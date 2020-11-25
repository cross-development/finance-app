//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChartPie, FaDollarSign } from 'react-icons/fa';

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

	&:hover svg {
		background-color: #4a56e2;
	}

	&:first-child {
		margin-bottom: 1rem;
	}
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: #000;
	display: flex;
	align-items: center;

	&.active {
		font-weight: 700;

		& svg {
			background-color: #4a56e2;
		}
	}
`;

export const StyledHomeIcon = styled(FaHome)`
	margin-right: 1rem;
	background-color: #6e78e8;
	padding: 0.1rem;
	color: #fff;
	border-radius: 2px;
	height: 100%;
	transition: all 250ms linear;
`;

export const StyledChartIcon = styled(FaChartPie)`
	margin-right: 1rem;
	background-color: #6e78e8;
	padding: 0.1rem;
	color: #fff;
	border-radius: 2px;
	height: 100%;
	transition: all 250ms linear;
`;

export const StyledRatesIcon = styled(FaDollarSign)`
	margin-right: 1rem;
	background-color: #6e78e8;
	padding: 0.1rem;
	color: #fff;
	border-radius: 2px;
	height: 100%;
	transition: all 250ms linear;
`;
