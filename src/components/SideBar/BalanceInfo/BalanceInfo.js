//Core
import React, { useMemo } from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StylesBalanceWrap, StyledTitle, StyledBalance } from './BalanceInfo.styles';

const BalanceInfo = () => {
	const { items: transactions } = useSelector(state => state.transactions);

	const memoTransactions = useMemo(() => [...transactions].reverse(), [transactions]);

	const balance = memoTransactions[0]?.balanceAfter.toLocaleString('ua-UA', {
		minimumFractionDigits: 2,
	});

	return (
		<StylesBalanceWrap>
			<StyledTitle>Ваш баланс</StyledTitle>

			<StyledBalance>&#8372; {balance || Number(0).toFixed(2)}</StyledBalance>
		</StylesBalanceWrap>
	);
};

export default BalanceInfo;
