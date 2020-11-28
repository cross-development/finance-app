//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Utils
import prettyDate from 'utils/prettyDate';
//Styles
import { StyledCategory, StyledComment } from './TransTableItem.styles';
import { StyledTransactionDate, StyledTransactionType } from './TransTableItem.styles';
import { StyledTrashIcon, StyledBalanceAfter, StyledAmount } from './TransTableItem.styles';

const TransTableItem = ({ transaction, onRemoveTransaction }) => {
	const { categories } = useSelector(state => state.transactions);

	const { transactionDate, id, type, categoryId, comment, amount, balanceAfter } = transaction;

	const category = useMemo(() => categories.find(({ id }) => id === categoryId), [
		categories,
		categoryId,
	]);

	const transactionType = type === 'INCOME' ? '+' : '-';
	const parsedDate = prettyDate.formatDate(transactionDate, 'DD.MM.YYYY');
	const formattedAmount = amount.toLocaleString('ua-UA', { minimumFractionDigits: 2 });
	const formattedBalanceAfter = balanceAfter.toLocaleString('ua-UA', { minimumFractionDigits: 2 });

	return (
		<tr>
			<StyledTransactionDate>{parsedDate}</StyledTransactionDate>
			<StyledTransactionType>{transactionType}</StyledTransactionType>
			<StyledCategory>{category?.name}</StyledCategory>
			<StyledComment>{comment}</StyledComment>
			<StyledAmount type={type}>{formattedAmount}</StyledAmount>
			<StyledBalanceAfter>
				{formattedBalanceAfter} <StyledTrashIcon id={id} onClick={onRemoveTransaction} />
			</StyledBalanceAfter>
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
