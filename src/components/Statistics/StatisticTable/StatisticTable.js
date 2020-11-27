//Core
import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
//Components
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledTableItem } from './StatisticTable.styles';
import { StyledTable, StyledIncomeRow, StyledExpenseRow } from './StatisticTable.styles';

const StatisticTable = () => {
	const { summary, loading } = useSelector(state => state.transactions);

	const memoExpensesRow = useMemo(
		() =>
			summary &&
			summary?.categoriesSummary?.reduce((acc, { name, type, total }) => {
				if (type === 'EXPENSE') {
					const tableRow = (
						<StyledTableItem key={name + total}>
							<td>{name}</td>
							<td>
								{(-1 * total).toLocaleString('ua-UA', {
									minimumFractionDigits: 2,
								})}
							</td>
						</StyledTableItem>
					);

					acc.push(tableRow);
				}

				return acc;
			}, []),
		[summary],
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

					<StyledExpenseRow>
						<td>Расходы:</td>
						<td>{expenseSummary}</td>
					</StyledExpenseRow>

					<StyledIncomeRow>
						<td>Доходы:</td>
						<td>{incomeSummary}</td>
					</StyledIncomeRow>
				</tbody>
			)}
		</StyledTable>
	);
};

// StatisticTable.propTypes = {};

export default StatisticTable;
