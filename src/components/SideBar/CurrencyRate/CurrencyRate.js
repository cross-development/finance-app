//Core
import React, { useState, useEffect, useMemo } from 'react';
//Components
import { Spinner } from 'components/Commons';
//Services
import { getLatestCurrency } from 'services/currencyAPI';
//Styles
import { StylesCurrencyWrap, StyledTable } from './CurrencyRate.styles';

const CurrencyRate = () => {
	const [currency, setCurrency] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => getLatestCurrency().then(setCurrency).catch(setError), []);

	const newCurrency = useMemo(() => currency.filter(({ ccy }) => ccy !== 'BTC'), [currency]);

	return newCurrency.length === 0 ? (
		<Spinner onLoad={newCurrency.length === 0} />
	) : (
		<StylesCurrencyWrap>
			<StyledTable>
				<thead>
					<tr>
						<th>Валюта</th>
						<th>Покупка</th>
						<th>Продажа</th>
					</tr>
				</thead>

				<tbody>
					{newCurrency.length > 0 &&
						newCurrency.map(({ ccy, buy, sale }) => (
							<tr key={ccy}>
								<td>{ccy}</td>
								<td>{parseFloat(buy).toFixed(3)}</td>
								<td>{parseFloat(sale).toFixed(3)}</td>
							</tr>
						))}
				</tbody>
			</StyledTable>
		</StylesCurrencyWrap>
	);
};

export default CurrencyRate;
