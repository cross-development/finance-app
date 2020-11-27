//Core
import React, { useState, useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Styles
import { StyledLabel, StyledSelect, StyledSelectsWrap } from './StatisticControls.styles';

const initialState = {
	month: '',
	year: '',
};

const StatisticControls = () => {
	const [statisticsPeriod, setStatisticsPeriod] = useState(initialState);

	const handleChangePeriod = ({ target: { name, value } }) =>
		setStatisticsPeriod(prevState => ({ ...prevState, [name]: value }));

	const dispatch = useDispatch();
	const { items: transactions } = useSelector(state => state.transactions);

	useEffect(() => {
		if (statisticsPeriod.month && statisticsPeriod.year) {
			dispatch(transactionsOperations.getTransactionsSummary({ ...statisticsPeriod }));
		}
	}, [dispatch, statisticsPeriod, statisticsPeriod.month, statisticsPeriod.year]);

	return (
		<StyledSelectsWrap>
			<StyledLabel>
				<StyledSelect
					name="month"
					value={statisticsPeriod.month || 'Месяц'}
					onChange={handleChangePeriod}
				>
					<option disabled>Месяц</option>

					<option value={10}>{'October'}</option>
					<option value={11}>{'November'}</option>
					<option value={12}>{'December'}</option>
				</StyledSelect>
			</StyledLabel>

			<StyledLabel>
				<StyledSelect
					name="year"
					value={statisticsPeriod.year || 'Год'}
					onChange={handleChangePeriod}
				>
					<option disabled>Год</option>

					<option value={2020}>{2020}</option>
					<option value={2021}>{2021}</option>
				</StyledSelect>
			</StyledLabel>
		</StyledSelectsWrap>
	);
};

export default StatisticControls;
