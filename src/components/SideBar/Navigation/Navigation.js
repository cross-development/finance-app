//Core
import React from 'react';
//Routes
import routes from 'router';
//Styles
import { StyledHomeIcon, StyledChartIcon } from './Navigation.styles';
import { StylesNavigationWrap, StyledNavigation } from './Navigation.styles';
import { StyledNavItem, StyledNavLink } from './Navigation.styles';
// import { StyledRatesIcon } from './Navigation.styles';

const Navigation = () => (
	<StylesNavigationWrap>
		<StyledNavigation>
			{routes.map(
				route =>
					route.private && (
						<StyledNavItem key={route.path}>
							<StyledNavLink to={route.path} exact={route.exact}>
								{route.label === 'Главная' ? <StyledHomeIcon /> : <StyledChartIcon />}

								{route.label}
							</StyledNavLink>
						</StyledNavItem>
					),
			)}
		</StyledNavigation>
	</StylesNavigationWrap>
);

export default Navigation;
