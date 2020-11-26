//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
//Redux
import { useSelector } from 'react-redux';

const TransTableItem = ({ transaction }) => {
	const { categories } = useSelector(state => state.transactions);

	const { transactionDate, type, categoryId, comment, amount, balanceAfter } = transaction;

	const category = useMemo(() => categories.find(({ id }) => id === categoryId), [
		categories,
		categoryId,
	]);

	const transactionType = type === 'INCOME' ? '+' : '-';
	const parsedDate = moment(transactionDate).format('DD.MM.YYYY');
	const amountStyle = type === 'INCOME' ? { color: '#24CCA7' } : { color: '#FF6596' };

	return (
		<tr>
			<td>{parsedDate}</td>
			<td>{transactionType}</td>
			<td>{category?.name}</td>
			<td>{comment}</td>
			<td style={amountStyle}>{amount}</td>
			<td>{balanceAfter}</td>
		</tr>
	);
};

export default TransTableItem;
