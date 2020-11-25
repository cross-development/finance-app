//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLoginWrap, StyledPromoImg, StyledLogoWrap } from './Login.styles';
import { StyledH1, StyledButton, StyledLink, StyledFormWrap } from './Login.styles';
import { StylesForm, StyledLabel, StyledInput } from './Login.styles';

const Login = ({ email, password, onSubmit, onChange }) => (
	<StyledLoginWrap>
		<StyledLogoWrap>
			<StyledPromoImg src={`${process.env.PUBLIC_URL}/img/walletPromo1.png`} />
		</StyledLogoWrap>

		<StyledFormWrap>
			<StylesForm onSubmit={onSubmit}>
				<StyledH1>Wallet</StyledH1>

				<StyledLabel>
					<StyledInput
						required
						type="email"
						name="email"
						value={email}
						autoComplete="off"
						placeholder="E-mail"
						onChange={onChange}
					/>
				</StyledLabel>

				<StyledLabel>
					<StyledInput
						required
						type="password"
						name="password"
						value={password}
						autoComplete="off"
						placeholder="Пароль"
						onChange={onChange}
					/>
				</StyledLabel>

				<StyledButton type="submit">Вход</StyledButton>

				<StyledLink to="/register">Регистрация</StyledLink>
			</StylesForm>
		</StyledFormWrap>
	</StyledLoginWrap>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Login;
