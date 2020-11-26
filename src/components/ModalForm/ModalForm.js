//Core
import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
//Components
import TypeSwitcher from './TypeSwitcher';
import ExpCategories from './ExpCategories';
import DataPicker from './DataPicker';
import AmountInput from './AmountInput';
import CommentInput from './CommentInput';
import ButtonsGroup from './ButtonsGroup';
//Redux
import { useDispatch } from 'react-redux';
import { transactionsOperations } from 'redux/transactions';
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
	categoryId: 'd9ee2284-4673-44f4-ab76-6258512ea409',
	comment: '',
	amount: 0,
};

const ModalForm = ({ onToggleModalOpen }) => {
	const [transactionInfo, setTransactionInfo] = useState(initialState);

	const dispatch = useDispatch();

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

		const { type, amount, transactionDate } = transactionInfo;

		const transaction = {
			...transactionInfo,
			amount: type === TransactionType.EXPENSE ? parseFloat(-amount) : parseFloat(amount),
			transactionDate: moment(transactionDate).format(),
		};

		dispatch(transactionsOperations.addTransaction({ transaction }));

		onToggleModalOpen();
	};

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

				<ExpCategories
					transactionType={transactionInfo.type}
					categories={transactionInfo.categoryId}
					onChangeCategory={handleChangeTransactionInfo}
				/>

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
