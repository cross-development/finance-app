//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledSwitcherWrap } from './TypeSwitcher.styles';
import { StyledSwitcherIncomeTitle, StyledSwitcherExpenseTitle } from './TypeSwitcher.styles';
import { StylesSwitcherLabel, StyledSlider, StyledSwitcherInput } from './TypeSwitcher.styles';

const TypeSwitcher = ({ transactionType, onToggleTransactionType }) => (
	<StyledSwitcherWrap>
		<StyledSwitcherIncomeTitle transType={transactionType}>Доход</StyledSwitcherIncomeTitle>

		<StylesSwitcherLabel>
			<StyledSwitcherInput
				type="checkbox"
				checked={transactionType === 'EXPENSE'}
				onChange={onToggleTransactionType}
			/>
			<StyledSlider />
		</StylesSwitcherLabel>

		<StyledSwitcherExpenseTitle transType={transactionType}>Расход</StyledSwitcherExpenseTitle>
	</StyledSwitcherWrap>
);

TypeSwitcher.propTypes = {
	transactionType: PropTypes.string.isRequired,
	onToggleTransactionType: PropTypes.func.isRequired,
};

export default TypeSwitcher;
