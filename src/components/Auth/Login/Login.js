//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
//Styles
import { StyledLoginWrap, StyledPromoWrap } from './Login.styles';
import { StyledH1, StyledButton, StyledLink, StyledFormWrap } from './Login.styles';
import { StylesForm, StyledLabel, StyledInput, StyledContainer } from './Login.styles';

const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const Login = ({ userInfo, handleSubmit }) => (
	<StyledLoginWrap>
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
						<StylesForm>
							<StyledH1>Wallet</StyledH1>

							<StyledLabel>
								<StyledInput
									required
									type="email"
									name="email"
									value={values.email}
									autoComplete="off"
									placeholder="E-mail"
									onChange={handleChange}
								/>
								{errors.email && touched.email ? <div>{errors.email}</div> : null}
							</StyledLabel>

							<StyledLabel>
								<StyledInput
									required
									type="password"
									name="password"
									value={values.password}
									autoComplete="off"
									placeholder="Пароль"
									onChange={handleChange}
								/>
								{errors.password && touched.password ? <div>{errors.password}</div> : null}
							</StyledLabel>

							<StyledButton type="submit">Вход</StyledButton>

							<StyledLink to="/register">Регистрация</StyledLink>
						</StylesForm>
					)}
				</Formik>
			</StyledFormWrap>
		</StyledContainer>
	</StyledLoginWrap>
);

Login.propTypes = {
	userInfo: PropTypes.exact({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
	}).isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Login;
