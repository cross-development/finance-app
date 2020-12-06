//Core
import React from 'react';
//Components
import TransTableItem from '../TransTableItem';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Styles
import { StyledTable, StyledTableWrap } from './TransTable.styles';

const TransTable = () => {
	const { items: transactions } = useSelector(state => state.transactions);
	const dispatch = useDispatch();

	const handleRemoveTransaction = ({ currentTarget: { id } }) =>
		dispatch(transactionsOperations.removeTransaction(id));

	return (
		<>
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
			</StyledTable>

			<StyledTableWrap>
				<StyledTable>
					<tbody>
						{transactions.length > 0 &&
							[...transactions]
								.sort((a, b) => Date.parse(a.balanceAfter) - Date.parse(b.balanceAfter))
								.sort((a, b) => Date.parse(b.transactionDate) - Date.parse(a.transactionDate))
								.map(transaction => (
									<TransTableItem
										key={transaction.id}
										transaction={transaction}
										onRemoveTransaction={handleRemoveTransaction}
									/>
								))}
					</tbody>
				</StyledTable>
			</StyledTableWrap>
		</>
	);
};

export default TransTable;
