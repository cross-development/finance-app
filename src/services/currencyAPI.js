//Core
import axios from 'axios';

const URL = 'https://cors-proxy-cross.herokuapp.com/privatbank/exchange';

const getLatestCurrency = async () => {
	try {
		const { data } = await axios.get(URL);

		return await data;
	} catch (error) {
		throw Error(error);
	}
};

export { getLatestCurrency };
