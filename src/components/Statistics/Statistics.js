//Core
import React, { useMemo } from 'react';
import randomColor from 'randomcolor';
//Components
import StatisticChart from './StatisticChart';
import StatisticControls from './StatisticControls';
import StatisticTable from './StatisticTable';
import Notification from '../Commons/Notification';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledContainer, StyledTableWrap } from './Statistics.styles';
import { StyledStatisticsWrap, StyledBackdrop, StyledTitle } from './Statistics.styles';

const Statistics = () => {
	const { summary } = useSelector(state => state.transactions);

	const summaryName = summary?.categoriesSummary?.reduce((acc, { name, type }) => {
		if (type === 'EXPENSE') acc.push(name);

		return acc;
	}, []);

	const summaryValue = summary?.categoriesSummary?.reduce((acc, { type, total }) => {
		if (type === 'EXPENSE') acc.push(-1 * total);

		return acc;
	}, []);

	const chartColorsNew = randomColor({
		count: summaryValue?.length,
		luminosity: 'dark',
		format: 'rgba',
	});

	const transactionsInfo = summaryValue?.map((_, idx) => ({
		title: summaryName[idx],
		value: summaryValue[idx],
		color: chartColorsNew[idx],
	}));

	const memoChartComponent = useMemo(
		() => (
			<StatisticChart
				summaryName={summaryName}
				chartColors={chartColorsNew}
				summaryValue={summaryValue}
			/>
		),
		[summaryName, chartColorsNew, summaryValue],
	);

	const memoControlsComponent = useMemo(() => <StatisticControls />, []);

	const memoTableComponent = useMemo(() => <StatisticTable transactionsInfo={transactionsInfo} />, [
		transactionsInfo,
	]);

	return (
		<StyledStatisticsWrap>
			<StyledBackdrop>
				<StyledTitle>Статистика</StyledTitle>

				<StyledContainer>
					{summaryValue?.length > 0 && memoChartComponent}

					{!summary && !summaryValue && <Notification message="Пожалуйста, укажите период." />}

					{summary && transactionsInfo?.length < 1 && (
						<Notification message="В этом месяце расходов нет." />
					)}

					<StyledTableWrap>
						{memoControlsComponent}

						{memoTableComponent}
					</StyledTableWrap>
				</StyledContainer>
			</StyledBackdrop>
		</StyledStatisticsWrap>
	);
};

export default Statistics;
