//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Chart from 'react-apexcharts';
import { Notification } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';

const StatisticChart = ({ chartColors, summaryName, summaryValue }) => {
	const { user } = useSelector(state => state.auth);

	const chartOptions = {
		options: {
			chart: {
				type: 'donut',
			},

			colors: chartColors,

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
				width: 0,
				height: 0,
				fontSize: '0px',
				markers: {
					width: 0,
					height: 0,
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

StatisticChart.propTypes = {
	chartColors: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string.isRequired),
	]),
	summaryName: PropTypes.arrayOf(PropTypes.string.isRequired),
	summaryValue: PropTypes.arrayOf(PropTypes.number.isRequired),
};

export default StatisticChart;
