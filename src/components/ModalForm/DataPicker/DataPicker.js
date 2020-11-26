//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledBirthdayInfo, StyledLabel, StyledDatepicker } from './DataPicker.styles';

const DataPicker = ({ transactionDate, onChangeTransaction }) => {
	const date = transactionDate ? new Date(transactionDate) : '';

	return (
		<StyledBirthdayInfo>
			<StyledLabel>
				<StyledDatepicker
					name="birthday"
					format="dd/MM/y"
					clearIcon={null}
					value={date}
					onChange={onChangeTransaction}
				/>
			</StyledLabel>
		</StyledBirthdayInfo>
	);
};

DataPicker.propTypes = {
	onChangeTransaction: PropTypes.func.isRequired,
	transactionDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default DataPicker;
