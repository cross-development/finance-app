//Core
import React from 'react';
//Components
import Logo from './Logo';
import AuthMenu from './AuthMenu';
//Styles
import styled from 'styled-components';

const AppBar = () => (
	<StyledAppBar>
		<Logo />

		<AuthMenu />
	</StyledAppBar>
);

const StyledAppBar = styled.header`
	padding: 0 4rem;
	height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export default AppBar;
