//Core
import { createAction } from '@reduxjs/toolkit';

const addTransactionRequest = createAction('transactions/addTransactionRequest');
const addTransactionSuccess = createAction('transactions/addTransactionSuccess');
const addTransactionFailure = createAction('transactions/addTransactionFailure');

const getTransactionsRequest = createAction('transactions/getTransactionsRequest');
const getTransactionsSuccess = createAction('transactions/getTransactionsSuccess');
const getTransactionsFailure = createAction('transactions/getTransactionsFailure');

const updateTransactionRequest = createAction('transactions/updateTransactionRequest');
const updateTransactionSuccess = createAction('transactions/updateTransactionSuccess');
const updateTransactionFailure = createAction('transactions/updateTransactionFailure');

const removeTransactionRequest = createAction('transactions/removeTransactionRequest');
const removeTransactionSuccess = createAction('transactions/removeTransactionSuccess');
const removeTransactionFailure = createAction('transactions/removeTransactionFailure');

const getTransactionCategoryRequest = createAction('transactions/getTransactionCategoryRequest');
const getTransactionCategorySuccess = createAction('transactions/getTransactionCategorySuccess');
const getTransactionCategoryFailure = createAction('transactions/getTransactionCategoryFailure');

const getTransactionsSummeryRequest = createAction('transactions/getTransactionsSummeryRequest');
const getTransactionsSummerySuccess = createAction('transactions/getTransactionsSummerySuccess');
const getTransactionsSummeryFailure = createAction('transactions/getTransactionsSummeryFailure');

const transactionActions = {
	addTransactionRequest,
	addTransactionSuccess,
	addTransactionFailure,

	getTransactionsRequest,
	getTransactionsSuccess,
	getTransactionsFailure,

	updateTransactionRequest,
	updateTransactionSuccess,
	updateTransactionFailure,

	removeTransactionRequest,
	removeTransactionSuccess,
	removeTransactionFailure,

	getTransactionCategoryRequest,
	getTransactionCategorySuccess,
	getTransactionCategoryFailure,

	getTransactionsSummeryRequest,
	getTransactionsSummerySuccess,
	getTransactionsSummeryFailure,
};

export default transactionActions;
