//Core
import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StylesBalanceWrap, StyledTitle, StyledBalance } from './BalanceInfo.styles';

const BalanceInfo = () => {
	const { user } = useSelector(state => state.auth);
	const { items } = useSelector(state => state.transactions);

	const currentBalance = items.length ? items[items.length - 1].balanceAfter : user.balance;
	const balance = currentBalance.toLocaleString('ua-UA', { minimumFractionDigits: 2 });

	return (
		<StylesBalanceWrap>
			<StyledTitle>Ваш баланс</StyledTitle>

			<StyledBalance>&#8372; {balance}</StyledBalance>
		</StylesBalanceWrap>
	);
};

export default BalanceInfo;
