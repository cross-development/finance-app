//Core
import React, { useEffect } from 'react';
import moment from 'moment';
//Components
import Statistics from 'components/Statistics';
//Redux
import { useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';

const StatisticsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const currentPeriod = {
			month: moment().month() + 1,
			year: moment().year(),
		};

		dispatch(transactionsOperations.getTransactionsSummary({ ...currentPeriod }));
	}, [dispatch]);

	return <Statistics />;
};

export default StatisticsPage;
