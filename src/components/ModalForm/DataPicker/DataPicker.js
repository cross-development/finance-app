//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledCalendarWrap, StyledLabel, StyledDatepicker } from './DataPicker.styles';

const DataPicker = ({ transactionDate, onChangeTransaction }) => {
	const date = transactionDate ? new Date(transactionDate) : '';

	return (
		<StyledCalendarWrap>
			<StyledLabel>
				<StyledDatepicker
					required
					name="transactionDate"
					format="dd/MM/y"
					clearIcon={null}
					value={date}
					onChange={onChangeTransaction}
				/>
			</StyledLabel>
		</StyledCalendarWrap>
	);
};

DataPicker.propTypes = {
	onChangeTransaction: PropTypes.func.isRequired,
	transactionDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default DataPicker;
