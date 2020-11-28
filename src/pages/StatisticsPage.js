//Core
import React from 'react';
//Components
import Statistics from 'components/Statistics';
import { Loader } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const StatisticsPage = () => {
	const { loading, summary } = useSelector(state => state.transactions);

	return loading ? <Loader onLoad={loading} /> : <Statistics summary={summary} />;
};

export default StatisticsPage;
