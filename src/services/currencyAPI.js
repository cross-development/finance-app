const BASE_URL = 'https://api.privatbank.ua/p24api';

const getLatestCurrency = async () => {
	try {
		const response = await fetch(`${BASE_URL}/pubinfo?json&exchange&coursid=5`);
		const data = await response.json();

		return data;
	} catch (error) {
		throw Error(error);
	}
};

export { getLatestCurrency };
