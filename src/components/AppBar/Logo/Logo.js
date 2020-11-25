//Core
import React from 'react';
//Styles
import { StyledLogoWrap, StyledLogo, StyledLogoLink } from './Logo.styles';

const Logo = () => (
	<StyledLogoWrap>
		<StyledLogo src={`${process.env.PUBLIC_URL}/img/logo.png`} />

		<StyledLogoLink to="/">Wallet</StyledLogoLink>
	</StyledLogoWrap>
);

export default Logo;
