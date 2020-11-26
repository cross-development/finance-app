//Core
import React from 'react';
//Components
import Chart from 'react-apexcharts';
//Redux
import { useSelector } from 'react-redux';

const StatisticChart = () => {
	const { user } = useSelector(state => state.auth);
	// const { summary } = useSelector(state => state.transactions);

	const chartOptions = {
		options: {
			chart: {
				type: 'donut',
			},

			plotOptions: {
				pie: {
					donut: {
						labels: {
							show: true,

							value: {
								show: false,
							},

							total: {
								show: true,
								label: `₴ ${user.balance.toLocaleString('ua-UA', {
									minimumFractionDigits: 2,
								})}`,
								fontSize: '22px',
								fontFamily: 'Roboto, Ubuntu, sans-serif',
								fontWeight: 700,
								color: '#000000',
							},
						},
					},
				},
			},

			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
		series: [44, 55, 41, 17, 15],
	};

	return (
		<div>
			<Chart options={chartOptions.options} series={chartOptions.series} type="donut" width="500" />
		</div>
	);
};

export default StatisticChart;
