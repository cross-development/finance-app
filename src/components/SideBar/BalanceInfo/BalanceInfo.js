//Core
import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StylesBalanceWrap, StyledTitle, StyledBalance } from './BalanceInfo.styles';

const BalanceInfo = () => {
	const { user } = useSelector(state => state.auth);

	return (
		<StylesBalanceWrap>
			<StyledTitle>Ваш баланс</StyledTitle>

			<StyledBalance>&#8372; {user.balance}</StyledBalance>
		</StylesBalanceWrap>
	);
};

export default BalanceInfo;
