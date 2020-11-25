//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import transactionsActions from './transactionsActions';

//Items reducer handler
const addTransaction = (state, { payload }) => [...state, payload];
const getTransactions = (state, { payload }) => payload;
const updateTransaction = (state, { payload }) => payload; //!FIXES
const removeTransaction = (state, { payload }) => state.filter(({ id }) => id !== payload);

//Items reducer
const items = createReducer([], {
	[transactionsActions.addTransactionSuccess]: addTransaction,
	[transactionsActions.getTransactionsSuccess]: getTransactions,
	[transactionsActions.updateTransactionSuccess]: updateTransaction,
	[transactionsActions.removeTransactionSuccess]: removeTransaction,
});

//Error reducer
const error = createReducer(null, {
	[transactionsActions.addTransactionFailure]: (state, { payload }) => payload,
	[transactionsActions.getTransactionsFailure]: (state, { payload }) => payload,
	[transactionsActions.updateTransactionFailure]: (state, { payload }) => payload,
	[transactionsActions.removeTransactionFailure]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[transactionsActions.addTransactionRequest]: () => true,
	[transactionsActions.addTransactionSuccess]: () => false,
	[transactionsActions.addTransactionFailure]: () => false,

	[transactionsActions.getTransactionsRequest]: () => true,
	[transactionsActions.getTransactionsSuccess]: () => false,
	[transactionsActions.getTransactionsFailure]: () => false,

	[transactionsActions.updateTransactionRequest]: () => true,
	[transactionsActions.updateTransactionSuccess]: () => false,
	[transactionsActions.updateTransactionFailure]: () => false,

	[transactionsActions.removeTransactionRequest]: () => true,
	[transactionsActions.removeTransactionSuccess]: () => false,
	[transactionsActions.removeTransactionFailure]: () => false,
});

export default combineReducers({
	items,
	error,
	loading,
});
