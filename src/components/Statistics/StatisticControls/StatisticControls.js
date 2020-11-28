//Core
import React, { useState, useEffect, useMemo, useCallback } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Utils
import prettyDate from 'utils/prettyDate';
//Styles
import { StyledLabel, StyledSelect, StyledSelectsWrap } from './StatisticControls.styles';

const StatisticControls = () => {
	const dispatch = useDispatch();
	const { items: transactions, summary } = useSelector(state => state.transactions);

	const [statMonthPeriod, setStatMonthPeriod] = useState('');
	const [statYearPeriod, setStatYearPeriod] = useState('' || summary?.year);

	const handleChangeMonthPeriod = ({ target: { value } }) => setStatMonthPeriod(value);
	const handleChangeYearPeriod = ({ target: { value } }) => {
		setStatYearPeriod(value);
		setStatMonthPeriod('');
	};

	const callbackTransactionsSummary = useCallback(() => {
		if (statMonthPeriod && statYearPeriod) {
			dispatch(transactionsOperations.getTransactionsSummary(statMonthPeriod, statYearPeriod));
		}
	}, [dispatch, statMonthPeriod, statYearPeriod]);

	useEffect(() => callbackTransactionsSummary(), [callbackTransactionsSummary]);

	const memoYearsOptions = useMemo(
		() =>
			prettyDate.getUniqueYearsNumber(transactions).reduce((acc, item) => {
				acc.push(
					<option key={item} value={item}>
						{item}
					</option>,
				);

				return acc;
			}, []),
		[transactions],
	);

	const memoMonthOptions = useMemo(() => {
		if (statYearPeriod) {
			return prettyDate.getUniqueTransactions(transactions, statYearPeriod).reduce((acc, item) => {
				const monthName = prettyDate.getMonthName(item.transactionDate);
				const monthNumber = prettyDate.getMonthNumber(item.transactionDate);

				const option = (
					<option key={item.id} value={monthNumber}>
						{monthName}
					</option>
				);

				acc.push(option);

				return acc;
			}, []);
		}
	}, [statYearPeriod, transactions]);

	return (
		<StyledSelectsWrap>
			<StyledLabel>
				<StyledSelect
					name="month"
					value={statMonthPeriod || summary?.month || 'Месяц'}
					onChange={handleChangeMonthPeriod}
				>
					<option disabled>Месяц</option>

					{statYearPeriod && memoMonthOptions}
				</StyledSelect>
			</StyledLabel>

			<StyledLabel>
				<StyledSelect name="year" value={statYearPeriod || 'Год'} onChange={handleChangeYearPeriod}>
					<option disabled>Год</option>

					{memoYearsOptions}
				</StyledSelect>
			</StyledLabel>
		</StyledSelectsWrap>
	);
};

export default StatisticControls;
