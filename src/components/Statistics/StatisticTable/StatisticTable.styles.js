//Core
import styled from 'styled-components';

export const StyledTable = styled.table`
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	table-layout: fixed;
	width: 100%;

	& thead {
		& tr th {
			background: #fff;
			padding: 0.8em 0;
			font-size: 18px;

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

	& tbody {
		th {
			&:first-child {
				padding: 1em 0;
				font-size: 18px;
			}
		}

		& th,
		& td {
			padding: 0.8rem 0;
			text-align: center;
			font-size: 16px;
		}
	}
`;

const StyledRow = styled.tr`
	font-weight: 700;

	& td:nth-child(even) {
		text-align: right;
		padding-right: 1.5rem;
	}

	& td:nth-child(odd) {
		position: relative;
		text-align: left;
		padding-left: 4rem;
	}
`;

export const StyledTableItem = styled(StyledRow)`
	font-weight: 400;

	&:not(:nth-last-of-type(-n + 2)) {
		border-bottom: 1px solid #d1d1d1;
	}

	& td:nth-child(odd) {
		&::before {
			position: absolute;
			top: 0.6rem;
			left: 1.7rem;
			display: inline-block;
			border-radius: 4px;
			content: '';
			width: 24px;
			height: 24px;
			background-color: #000;
		}
	}
`;

export const StyledIncomeRow = styled(StyledRow)`
	& td:nth-child(odd) {
		padding-left: 1.7rem;
	}

	& td:last-child {
		color: #24cca7;
	}
`;

export const StyledExpenseRow = styled(StyledRow)`
	& td:nth-child(odd) {
		padding-left: 1.7rem;
	}

	& td:last-child {
		color: #ff6596;
	}
`;
