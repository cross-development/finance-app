//Core
import React, { useEffect } from 'react';
//Components
import Statistics from 'components/Statistics';
//Redux
import { useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Utils
import prettyDate from 'utils/prettyDate';

const StatisticsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const month = prettyDate.getMonthNumber();
		const year = prettyDate.getYearNumber();

		dispatch(transactionsOperations.getTransactionsSummary(month, year));
	}, [dispatch]);

	return <Statistics />;
};

export default StatisticsPage;
