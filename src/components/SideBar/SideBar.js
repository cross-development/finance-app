//Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Pages
import CurrencyPage from 'pages/CurrencyPage';
//Components
import Navigation from './Navigation';
import BalanceInfo from './BalanceInfo';
//Styles
import { StyledSideBar, StyledBackdrop, StyledContainer } from './SideBar.styles';

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

export default SideBar;
