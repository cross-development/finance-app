//Core
import React from 'react';
//Components
import Chart from 'react-apexcharts';
import { Notification } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const StatisticChart = () => {
	const { user } = useSelector(state => state.auth);
	const { summary } = useSelector(state => state.transactions);

	const summaryName = summary?.categoriesSummary?.reduce((acc, { name, type }) => {
		if (type === 'EXPENSE') acc.push(name);

		return acc;
	}, []);

	const summaryValue = summary?.categoriesSummary?.reduce((acc, { type, total }) => {
		if (type === 'EXPENSE') acc.push(-1 * total);

		return acc;
	}, []);

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

			legend: {
				show: true,
				position: 'right',
				horizontalAlign: 'center',
				floating: true,
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

			labels: summaryName,
		},

		series: summaryValue,
	};

	return (
		<div>
			{summaryValue?.length > 0 && (
				<Chart
					options={chartOptions.options}
					series={chartOptions.series}
					type="donut"
					width="500"
				/>
			)}

			{summaryValue?.length < 1 && <Notification />}
		</div>
	);
};

export default StatisticChart;
