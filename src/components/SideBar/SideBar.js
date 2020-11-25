//Core
import React from 'react';
//Components
import Navigation from './Navigation';
import BalanceInfo from './BalanceInfo';
import CurrencyRate from './CurrencyRate';
//Styles
import styled from 'styled-components';

const SideBar = () => {
	return (
		<StyledSideBar>
			<Navigation />

			<BalanceInfo />

			<CurrencyRate />
		</StyledSideBar>
	);
};

const StyledSideBar = styled.aside`
	flex: 0 0 30%;
	height: 100vh;
	background-color: #e7eaf2;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* align-items: flex-start; */
`;

export default SideBar;
