//Core
import styled from 'styled-components';
import bgWave from 'assets/wave.svg';

export const StylesCurrencyWrap = styled.div`
	background-color: #4a56e2;
	background-image: url(${bgWave});
	background-size: contain;
	background-position: bottom;
	background-repeat: no-repeat;
	width: 100%;
	min-height: 220px;
	border-radius: 30px;
	overflow: hidden;
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	height: auto;
	margin-bottom: 5rem;

	& tr th {
		padding: 1rem 0;
		width: 30px;
		height: 35px;
	}

	& th {
		background: #6e78e8;
		color: #fff;
		font-weight: 700;
	}

	& td {
		text-align: center;
		color: #fff;
		padding: 1rem 0;
	}
`;
