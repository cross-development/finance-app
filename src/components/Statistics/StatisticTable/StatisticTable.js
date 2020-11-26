//Core
import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
//Components
// import moduleName from 'module'
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledTableItem } from './StatisticTable.styles';
import { StyledTable, StyledIncomeRow, StyledExpenseRow } from './StatisticTable.styles';

const StatisticTable = () => {
	const { summary } = useSelector(state => state.transactions);

	const memoExpensesRow = useMemo(
		() =>
			summary &&
			summary.categoriesSummary.reduce((acc, { name, type, total }) => {
				if (type === 'EXPENSE') {
					const tableRow = (
						<StyledTableItem key={name + total}>
							<td>{name}</td>
							<td>{(-1 * total).toFixed(2)}</td>
						</StyledTableItem>
					);

					acc.push(tableRow);
				}

				return acc;
			}, []),
		[summary],
	);

	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Категория</th>
					<th>Сумма</th>
				</tr>
			</thead>

			<tbody>
				{memoExpensesRow}

				<StyledExpenseRow>
					<td>Расходы:</td>
					<td>{(summary?.expenseSummary * -1).toFixed(2)}</td>
				</StyledExpenseRow>

				<StyledIncomeRow>
					<td>Доходы:</td>
					<td>{(summary?.incomeSummary * -1).toFixed(2)}</td>
				</StyledIncomeRow>
			</tbody>
		</StyledTable>
	);
};

// StatisticTable.propTypes = {};

export default StatisticTable;
