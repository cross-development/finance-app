//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
//Assets
import Logo from 'assets/logo.png';
//Styles
import { StyledRequireMessage, StyledButton } from './Register.styles';
import { StyledH1, StyledRegisterWrap, StyledFormWrap } from './Register.styles';
import { StyledEmailIcon, StyledPassIcon, StylesNameIcon } from './Register.styles';
import { StyledForm, StyledLabel, StyledInput, StyledLogo } from './Register.styles';
import { StyledPromoWrap, StyledLink, StyledContainer, StyledLogoWrap } from './Register.styles';

const SignupSchema = Yup.object().shape({
	username: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
	confirmPassword: Yup.string()
		.required('Required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({ userInfo, handleSubmit }) => (
	<StyledRegisterWrap>
		<StyledContainer>
			<StyledPromoWrap />

			<StyledFormWrap>
				<Formik
					initialValues={userInfo}
					validationSchema={SignupSchema}
					onSubmit={(values, actions) => {
						handleSubmit(values);
						actions.setSubmitting(false);
						actions.resetForm({ values: userInfo });
					}}
				>
					{({ handleChange, values, touched, isValid, errors }) => (
						<StyledForm>
							<StyledLogoWrap>
								<StyledLogo src={Logo} alt="logo" />
								<StyledH1>Wallet</StyledH1>
							</StyledLogoWrap>

							<StyledLabel>
								<StyledEmailIcon />

								<StyledInput
									required
									type="email"
									name="email"
									value={values.email}
									autoComplete="off"
									placeholder="E-mail"
									onChange={handleChange}
								/>
								{errors.email && touched.email ? (
									<StyledRequireMessage>{errors.email}</StyledRequireMessage>
								) : null}
							</StyledLabel>

							<StyledLabel>
								<StyledPassIcon />

								<StyledInput
									required
									type="password"
									name="password"
									value={values.password}
									autoComplete="off"
									placeholder="Пароль"
									onChange={handleChange}
								/>
								{errors.password && touched.password ? (
									<StyledRequireMessage>{errors.password}</StyledRequireMessage>
								) : null}
							</StyledLabel>

							<StyledLabel>
								<StyledPassIcon />

								<StyledInput
									required
									type="password"
									name="confirmPassword"
									value={values.confirmPassword}
									autoComplete="off"
									placeholder="Подтвердите пароль"
									onChange={handleChange}
								/>
								{errors.confirmPassword && touched.confirmPassword ? (
									<StyledRequireMessage>{errors.confirmPassword}</StyledRequireMessage>
								) : null}
							</StyledLabel>

							<StyledLabel>
								<StylesNameIcon />

								<StyledInput
									required
									type="text"
									name="username"
									value={values.username}
									autoComplete="off"
									placeholder="Ваше имя"
									onChange={handleChange}
								/>
								{errors.username && touched.username ? (
									<StyledRequireMessage>{errors.username}</StyledRequireMessage>
								) : null}
							</StyledLabel>

							<StyledButton type="submit">Регистрация</StyledButton>

							<StyledLink to="/login">Вход</StyledLink>
						</StyledForm>
					)}
				</Formik>
			</StyledFormWrap>
		</StyledContainer>
	</StyledRegisterWrap>
);

Register.propTypes = {
	userInfo: PropTypes.exact({
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		confirmPassword: PropTypes.string.isRequired,
	}).isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Register;
