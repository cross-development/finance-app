//Core
import React from 'react';
//Components
import TransactsTable from './TransTable';
import TransButton from './TransButton';
//Styles
import { StyledTransactsWrap, StyledBackdrop } from './Transactions.styles';

const Transactions = ({ isModalOpen, onToggleModalOpen }) => (
	<StyledTransactsWrap>
		<StyledBackdrop>
			<TransactsTable />

			<TransButton isModalOpen={isModalOpen} onToggleModalOpen={onToggleModalOpen} />
		</StyledBackdrop>
	</StyledTransactsWrap>
);

export default Transactions;
