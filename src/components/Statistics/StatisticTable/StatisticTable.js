//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledTableItem } from './StatisticTable.styles';
import { StyledTable, StyledIncomeRow, StyledExpenseRow } from './StatisticTable.styles';

const StatisticTable = ({ transactionsInfo }) => {
	const { summary, loading } = useSelector(state => state.transactions);

	const memoExpensesRow = useMemo(
		() =>
			transactionsInfo &&
			transactionsInfo?.reduce((acc, { title, value, color }) => {
				const tableRow = (
					<StyledTableItem marker={color} key={title + color}>
						<td>{title}</td>
						<td>
							{value.toLocaleString('ua-UA', {
								minimumFractionDigits: 2,
							})}
						</td>
					</StyledTableItem>
				);

				acc.push(tableRow);

				return acc;
			}, []),
		[transactionsInfo],
	);

	const expenseSummary = (summary?.expenseSummary === 0
		? summary.expenseSummary
		: summary?.expenseSummary * -1
	)?.toLocaleString('ua-UA', {
		minimumFractionDigits: 2,
	});

	const incomeSummary = summary?.incomeSummary?.toLocaleString('ua-UA', {
		minimumFractionDigits: 2,
	});

	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Категория</th>
					<th>Сумма</th>
				</tr>
			</thead>

			{!loading && (
				<tbody>
					{memoExpensesRow}

					{summary && (
						<>
							<StyledExpenseRow>
								<td>Расходы:</td>
								<td>{expenseSummary}</td>
							</StyledExpenseRow>

							<StyledIncomeRow>
								<td>Доходы:</td>
								<td>{incomeSummary}</td>
							</StyledIncomeRow>
						</>
					)}
				</tbody>
			)}
		</StyledTable>
	);
};

StatisticTable.propTypes = {
	transactionsInfo: PropTypes.arrayOf(
		PropTypes.exact({
			title: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
			color: PropTypes.string.isRequired,
		}).isRequired,
	),
};

export default StatisticTable;
