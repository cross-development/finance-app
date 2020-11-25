//Core
import React from 'react';
//Components
import TransactsTable from './TransTable';
import TransTableHead from './TransTableHead';
import TransTableItem from './TransTableItem';
import TransButton from './TransButton';
//Styles
import styled from 'styled-components';

const Transactions = () => {
	return (
		<StyledTransactsWrap>
			<TransactsTable>
				<TransTableHead />

				<TransTableItem />
			</TransactsTable>

			<TransButton />
		</StyledTransactsWrap>
	);
};

const StyledTransactsWrap = styled.div``;

export default Transactions;
