//Core
import React from 'react';
//Components
import TransTableItem from '../TransTableItem';
//Styles
import { StyledTable } from './TransTable.styles';

const TransTable = () => (
	<StyledTable>
		<thead>
			<tr>
				<th>Дата</th>
				<th>Тип</th>
				<th>Категория</th>
				<th>Комментарий</th>
				<th>Сумма</th>
				<th>Баланс</th>
			</tr>
		</thead>

		<tbody>
			{[1, 2, 3, 4, 5].map(i => (
				<TransTableItem key={i} />
			))}
		</tbody>
	</StyledTable>
);

export default TransTable;
