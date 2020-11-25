//Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Pages
import CurrencyPage from 'pages/CurrencyPage';
//Components
import Navigation from './Navigation';
import BalanceInfo from './BalanceInfo';
//Assets
import bgImg from 'assets/EllipseBlue.png';
//Styles
import styled from 'styled-components';

const SideBar = () => (
	<StyledSideBar>
		<StyledBackdrop>
			<StyledContainer>
				<Navigation />

				<BalanceInfo />

				<Switch>
					<Route path="/" component={CurrencyPage} />
				</Switch>
			</StyledContainer>
		</StyledBackdrop>
	</StyledSideBar>
);

const StyledSideBar = styled.aside`
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: contain;
	flex: 0 0 30%;
	height: 90vh;
	background-color: #e7eaf2;
	display: flex;
	justify-content: center;
	align-items: stretch;
`;

const StyledBackdrop = styled.div`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: stretch;
	height: auto;
`;

const StyledContainer = styled.div`
	height: auto;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;

export default SideBar;
