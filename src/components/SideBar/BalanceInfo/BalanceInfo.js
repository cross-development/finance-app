//Core
import React, { useMemo } from 'react';
//Components
import { Spinner } from 'components/Commons';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StylesBalanceWrap, StyledTitle, StyledBalance } from './BalanceInfo.styles';

const BalanceInfo = () => {
	const { items: transactions, loading } = useSelector(state => state.transactions);
	const { user } = useSelector(state => state.auth);

	const memoTransactions = useMemo(
		() =>
			[...transactions]
				.sort((a, b) => Date.parse(a.balanceAfter) - Date.parse(b.balanceAfter))
				.sort((a, b) => Date.parse(b.transactionDate) - Date.parse(a.transactionDate)),
		[transactions],
	);

	const balance = user?.balance?.toLocaleString('ua-UA', {
		minimumFractionDigits: 2,
	});

	return (
		<StylesBalanceWrap>
			<StyledTitle>Ваш баланс</StyledTitle>

			<StyledBalance>&#8372; {balance}</StyledBalance>
		</StylesBalanceWrap>
	);
};

export default BalanceInfo;
