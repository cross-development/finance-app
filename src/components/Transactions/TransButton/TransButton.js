//Core
import React from 'react';
//Styles
import { StyledAddButton } from './TransButton.styles';

const TransButton = ({ isModalOpen, onToggleModalOpen }) => (
	<StyledAddButton disabled={isModalOpen} onClick={onToggleModalOpen}>
		+
	</StyledAddButton>
);

export default TransButton;
