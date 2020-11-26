//Core
import React from 'react';
// import PropTypes from 'prop-types';

const TransTableItem = () => (
	<tr key={Date.now()}>
		<td>{'25.11.2020'}</td>
		<td>{'-'}</td>
		<td>{'Нерегулярный доход'}</td>
		<td>{'Овощи на неделю'}</td>
		<td>{1000}</td>
		<td>{20000}</td>
	</tr>
);

export default TransTableItem;
