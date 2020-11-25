//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ProgressBar from '@ramonak/react-progress-bar';
//Styles
import { StyledLogoWrap, StyledPromoImg, StyledLink } from './Register.styles';
import { StyledH1, StyledRegisterWrap, StyledFormWrap } from './Register.styles';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './Register.styles';

const Register = ({ userInfo, progress, onSubmit, onChange }) => {
	const { username, email, password, repassword } = userInfo;

	return (
		<StyledRegisterWrap>
			<StyledLogoWrap>
				<StyledPromoImg src={`${process.env.PUBLIC_URL}/img/walletPromo2.png`} />
			</StyledLogoWrap>

			<StyledFormWrap>
				<StyledForm onSubmit={onSubmit}>
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

					<StyledLabel>
						<StyledInput
							required
							type="password"
							name="repassword"
							value={repassword}
							autoComplete="off"
							placeholder="Подтвердите пароль"
							onChange={onChange}
						/>
					</StyledLabel>

					<ProgressBar height="10px" labelSize="0px" bgcolor="#24CCA7" completed={progress} />

					<StyledLabel>
						<StyledInput
							required
							type="text"
							name="username"
							value={username}
							autoComplete="off"
							placeholder="Ваше имя"
							onChange={onChange}
						/>
					</StyledLabel>

					<StyledButton type="submit">Регистрация</StyledButton>

					<StyledLink to="/login">Вход</StyledLink>
				</StyledForm>
			</StyledFormWrap>
		</StyledRegisterWrap>
	);
};

Register.propTypes = {
	userInfo: PropTypes.exact({
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		repassword: PropTypes.string.isRequired,
	}).isRequired,
	progress: PropTypes.number.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Register;
