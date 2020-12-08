//Core
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import TransTableItem from '../TransTableItem';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
//Styles
import { StyledTable, StyledTableWrap } from './TransTable.styles';
import fadeTransactionItem from 'animations/fadeTransactionItem.module.css';

const TransTable = () => {
	const { items: transactions } = useSelector(state => state.transactions);

	const dispatch = useDispatch();
	// .sort((a, b) => a.balanceAfter - b.balanceAfter)

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
					<TransitionGroup component="tbody">
						{transactions.length > 0 &&
							[...transactions].reverse().map(transaction => (
								<CSSTransition key={transaction.id} timeout={250} classNames={fadeTransactionItem}>
									<TransTableItem
										transaction={transaction}
										onRemoveTransaction={handleRemoveTransaction}
									/>
								</CSSTransition>
							))}
					</TransitionGroup>
				</StyledTable>
			</StyledTableWrap>
		</>
	);
};

export default TransTable;
