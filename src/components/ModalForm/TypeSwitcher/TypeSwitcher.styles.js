//Core
import styled from 'styled-components';

export const StyledSwitcherWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 2rem 0;
`;

export const StyledSwitcherIncomeTitle = styled.p`
	font-size: 16px;
	color: ${({ transType }) => (transType === 'INCOME' ? '#24CCA7' : '#E0E0E0')};
`;

export const StyledSwitcherExpenseTitle = styled.p`
	font-size: 16px;
	color: ${({ transType }) => (transType === 'EXPENSE' ? '#FF6596' : '#E0E0E0')};
`;

export const StylesSwitcherLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 80px;
	height: 40px;
	margin: 0 1rem;
`;

export const StyledSlider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
	border-radius: 34px;
	border: 1px solid #e0e0e0;

	&:before {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34px;
		font-weight: 400;
		color: #fff;
		content: '+';
		height: 44px;
		width: 44px;
		left: 0;
		bottom: -3px;
		background-color: #24cca7;
		transition: all 250ms linear;
		border-radius: 50%;
		box-shadow: 0 0 8px #24cca7;
	}
`;

export const StyledSwitcherInput = styled.input`
	display: none;

	&:checked + ${StyledSlider}:before {
		content: '–';
		transform: translateX(40px);
		background-color: #ff6596;
		box-shadow: 0 0 8px #ff6596;
	}
`;
