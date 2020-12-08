//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledAmountInput, StyledAmountLabel } from './AmountInput.styles';

const AmountInput = ({ amount, onChangeTransactionInfo }) => (
	<StyledAmountLabel>
		<StyledAmountInput
			required
			type="number"
			name="amount"
			placeholder="0.00"
			value={amount || ''}
			autoComplete="off"
			onChange={onChangeTransactionInfo}
		/>
	</StyledAmountLabel>
);

AmountInput.propTypes = {
	amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChangeTransactionInfo: PropTypes.func.isRequired,
};

export default AmountInput;
