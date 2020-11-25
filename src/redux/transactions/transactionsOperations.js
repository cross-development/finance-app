//Core
import axios from 'axios';
//Redux
import transactionsActions from './transactionsActions';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

const addTransaction = credential => dispatch => {
	dispatch(transactionsActions.addTransactionRequest());

	axios
		.post('/api/transactions', credential)
		.then(({ data }) => dispatch(transactionsActions.addTransactionSuccess(data)))
		.catch(error => dispatch(transactionsActions.addTransactionFailure(error)));

	// {
	// 	"transactionDate": "string",
	// 	"type": "INCOME",
	// 	"categoryId": "string",
	// 	"comment": "string",
	// 	"amount": 0
	//   }
};

const getTransactions = () => dispatch => {
	dispatch(transactionsActions.getTransactionsRequest());

	axios
		.get('/api/transactions')
		.then(({ data }) => dispatch(transactionsActions.getTransactionsSuccess(data)))
		.catch(error => dispatch(transactionsActions.getTransactionsFailure(error)));

	// [
	// 	{
	// 		id: 'string',
	// 		transactionDate: 'string',
	// 		type: 'INCOME',
	// 		categoryId: 'string',
	// 		userId: 'string',
	// 		comment: 'string',
	// 		amount: 0,
	// 		balanceAfter: 0,
	// 	},
	// ];
};

const updateTransaction = transactionId => dispatch => {
	dispatch(transactionsActions.updateTransactionRequest());

	axios
		.patch(`/api/transactions/${transactionId}`)
		.then(() => dispatch(transactionsActions.updateTransactionSuccess(transactionId)))
		.catch(error => dispatch(transactionsActions.updateTransactionFailure(error)));

	// {
	// 	"transactionDate": "string",
	// 	"type": "INCOME",
	// 	"categoryId": "string",
	// 	"comment": "string",
	// 	"amount": 0
	//   }
};

const removeTransaction = transactionId => dispatch => {
	dispatch(transactionsActions.removeTransactionRequest());

	axios
		.delete(`/api/transactions/${transactionId}`)
		.then(() => dispatch(transactionsActions.removeTransactionSuccess(transactionId)))
		.catch(error => dispatch(transactionsActions.removeTransactionFailure(error)));
};

const transactionsOperations = {
	addTransaction,
	getTransactions,
	updateTransaction,
	removeTransaction,
};

export default transactionsOperations;
