//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
//Components
import ProgressBar from '@ramonak/react-progress-bar';
//Styles
import { StyledPromoWrap, StyledLink, StyledContainer } from './Register.styles';
import { StyledH1, StyledRegisterWrap, StyledFormWrap } from './Register.styles';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './Register.styles';

const SignupSchema = Yup.object().shape({
	username: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
	confirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({ userInfo, progress, handleSubmit }) => (
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

							<StyledLabel>
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
									<div>{errors.confirmPassword}</div>
								) : null}
							</StyledLabel>

							<ProgressBar height="10px" labelSize="0px" bgcolor="#24CCA7" completed={progress} />

							<StyledLabel>
								<StyledInput
									required
									type="text"
									name="username"
									value={values.username}
									autoComplete="off"
									placeholder="Ваше имя"
									onChange={handleChange}
								/>
								{errors.username && touched.username ? <div>{errors.username}</div> : null}
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
	progress: PropTypes.number.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Register;
