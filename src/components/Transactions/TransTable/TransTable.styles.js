//Core
import styled from 'styled-components';

export const StyledTable = styled.table`
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	table-layout: fixed;
	width: 100%;

	& thead {
		background: #fff;
		padding: 0.8em 0;

		& tr th {
			&:first-child {
				border-top-left-radius: 30px;
				border-bottom-left-radius: 30px;
			}

			&:last-child {
				border-top-right-radius: 30px;
				border-bottom-right-radius: 30px;
			}
		}
	}

	& tr {
		background: transparent;
		padding: 0.35em;
		transition: all 250ms linear;

		&:not(:first-child) {
			border-top: 1px solid #d1d1d1;
		}

		&:hover {
			background-color: #fff;
			cursor: pointer;
		}
	}

	& th {
		&:first-child {
			padding: 1em 0;
			font-size: 18px;
		}
	}

	& th,
	& td {
		padding: 0.8em 0;
		text-align: center;
		font-size: 16px;
	}

	/* & td:nth-last-of-type(2) {
		text-align: right;
	} */
`;
