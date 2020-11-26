//Core
import React, { useMemo } from 'react';
//Components
import TransTableItem from '../TransTableItem';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Styles
import { StyledTable } from './TransTable.styles';

const TransTable = () => {
	const { items: transactions } = useSelector(state => state.transactions);
	const dispatch = useDispatch();

	const handleRemoveTransaction = ({ currentTarget: { id } }) =>
		dispatch(transactionsOperations.removeTransaction(id));

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
				{transactions.map(transaction => (
					<TransTableItem
						key={transaction.id}
						transaction={transaction}
						onRemoveTransaction={handleRemoveTransaction}
					/>
				))}
			</tbody>
		</StyledTable>
	);
};

export default TransTable;
