//Core
import styled from 'styled-components';

export const StyledTableWrap = styled.div`
	width: 100%;
	height: 85%;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #8c94ea;
		border-radius: 30px;
	}

	&::-webkit-scrollbar-thumb {
		background: #6e78e8;
		border-radius: 30px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #616bd8;
	}
`;

export const StyledTable = styled.table`
	border-collapse: collapse;
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
		& tr {
			transition: all 250ms linear;
			font-size: 16px;

			& td {
				padding-top: 0.8rem;
				padding-bottom: 0.8rem;
			}

			&:not(:first-child) {
				border-top: 1px solid #d1d1d1;
			}

			&:hover {
				background-color: #fff;
			}
		}
	}
`;
