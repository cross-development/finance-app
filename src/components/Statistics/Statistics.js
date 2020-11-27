//Core
import React from 'react';
//Components
import StatisticChart from './StatisticChart';
import StatisticControls from './StatisticControls';
import StatisticTable from './StatisticTable';
//Redux
// import { useSelector } from 'react-redux';
//Styles
import { StyledContainer, StyledTableWrap } from './Statistics.styles';
import { StyledStatisticsWrap, StyledBackdrop, StyledTitle } from './Statistics.styles';

const Statistics = () => {
	// const { loading } = useSelector(state => state.transactions);

	return (
		<StyledStatisticsWrap>
			<StyledBackdrop>
				<StyledTitle>Статистика</StyledTitle>

				<StyledContainer>
					<StatisticChart />

					<StyledTableWrap>
						<StatisticControls />

						<StatisticTable />
					</StyledTableWrap>
				</StyledContainer>
			</StyledBackdrop>
		</StyledStatisticsWrap>
	);
};

export default Statistics;
