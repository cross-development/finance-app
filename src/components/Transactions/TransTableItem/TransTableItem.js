//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledTrashIcon, StyledTd } from './TransTableItem.styles';

const TransTableItem = ({ transaction, onRemoveTransaction }) => {
	const { categories } = useSelector(state => state.transactions);

	const { transactionDate, id, type, categoryId, comment, amount, balanceAfter } = transaction;

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
			<td style={amountStyle}>{amount.toFixed(2)}</td>
			<StyledTd>
				{balanceAfter.toFixed(2)} <StyledTrashIcon id={id} onClick={onRemoveTransaction} />
			</StyledTd>
		</tr>
	);
};

TransTableItem.propTypes = {
	transaction: PropTypes.exact({
		id: PropTypes.string.isRequired,
		userId: PropTypes.string.isRequired,
		transactionDate: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		categoryId: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		balanceAfter: PropTypes.number.isRequired,
	}).isRequired,

	onRemoveTransaction: PropTypes.func.isRequired,
};

export default TransTableItem;
