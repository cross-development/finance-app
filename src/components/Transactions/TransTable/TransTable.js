//Core
import React, { useMemo } from 'react';
//Components
import TransTableItem from '../TransTableItem';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledTable } from './TransTable.styles';

const TransTable = () => {
	const { items: transactions } = useSelector(state => state.transactions);

	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Дата</th>
					<th>Тип</th>
					<th>Категория</th>
					<th>Комментарий</th>
					<th>Сумма</th>
					<th>Баланс</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map(({ id, userId, ...transaction }) => (
					<TransTableItem key={id} transaction={transaction} />
				))}
			</tbody>
		</StyledTable>
	);
};

export default TransTable;
