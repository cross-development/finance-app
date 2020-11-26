//Core
import React, { useState, useEffect, useCallback } from 'react';
//Components
import TypeSwitcher from './TypeSwitcher';
import ExpCategories from './ExpCategories';
import DataPicker from './DataPicker';
import AmountInput from './AmountInput';
import CommentInput from './CommentInput';
import ButtonsGroup from './ButtonsGroup';
//Styles
import { StyledModalWrap, StyledModalForm } from './ModalForm.styles';
import { StyledFormTitle, StyledCloseButton, StyledInputsWrap } from './ModalForm.styles';

const TransactionType = {
	EXPENSE: 'EXPENSE',
	INCOME: 'INCOME',
};

const initialState = {
	transactionDate: '',
	type: TransactionType.INCOME,
	categoryId: '',
	comment: '',
	amount: 0,
};

const ModalForm = ({ onToggleModalOpen }) => {
	const [transactionInfo, setTransactionInfo] = useState(initialState);

	const handleCloseModal = useCallback(
		({ code, target }) => {
			if (code === 'Escape' || target.id === 'backdrop') return onToggleModalOpen();
		},
		[onToggleModalOpen],
	);

	useEffect(() => {
		window.addEventListener('click', handleCloseModal);
		window.addEventListener('keydown', handleCloseModal);

		return () => {
			window.removeEventListener('click', handleCloseModal);
			window.removeEventListener('keydown', handleCloseModal);
		};
	}, [handleCloseModal]);

	const handleToggleTransactionType = () =>
		setTransactionInfo(prevState => ({
			...prevState,
			type:
				prevState.type === TransactionType.INCOME
					? TransactionType.EXPENSE
					: TransactionType.INCOME,
		}));

	const handleChangeTransactionInfo = ({ target: { name, value } }) =>
		setTransactionInfo(prevState => ({ ...prevState, [name]: value }));

	const handleChangeTransactionDate = value =>
		setTransactionInfo(prevState => ({ ...prevState, transactionDate: value }));

	const handleSubmit = e => {
		e.preventDefault();

		console.log(transactionInfo);

		// onToggleModalOpen();
	};

	const isExpenseType = transactionInfo.type === TransactionType.EXPENSE;

	return (
		<StyledModalWrap id="backdrop">
			<StyledModalForm onSubmit={handleSubmit}>
				<StyledCloseButton type="button" onClick={onToggleModalOpen}>
					&#10006;
				</StyledCloseButton>

				<StyledFormTitle>Добавить транзакцию</StyledFormTitle>

				<TypeSwitcher
					transactionType={transactionInfo.type}
					onToggleTransactionType={handleToggleTransactionType}
				/>

				{isExpenseType && (
					<ExpCategories
						categories={transactionInfo.categoryId}
						onChangeCategory={handleChangeTransactionInfo}
					/>
				)}

				<StyledInputsWrap>
					<AmountInput
						amount={transactionInfo.amount}
						onChangeTransactionInfo={handleChangeTransactionInfo}
					/>

					<DataPicker
						transactionDate={transactionInfo.transactionDate}
						onChangeTransaction={handleChangeTransactionDate}
					/>
				</StyledInputsWrap>

				<CommentInput
					comment={transactionInfo.comment}
					onChangeTransactionInfo={handleChangeTransactionInfo}
				/>

				<ButtonsGroup onToggleModalOpen={onToggleModalOpen} />
			</StyledModalForm>
		</StyledModalWrap>
	);
};

export default ModalForm;
