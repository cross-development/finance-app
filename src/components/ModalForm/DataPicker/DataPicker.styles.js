//Core
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const StyledBirthdayInfo = styled.div`
	/* border-bottom: 3px solid #f5f7fa; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40%;
	/* padding: 1.5rem 2rem; */
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: #5b6378;
`;

export const StyledDatepicker = styled(DatePicker)`
	display: block;
	width: 100%;
	color: #5b6378;
	/* border-radius: 50px; */
	border: none;
	/* box-shadow: 0px 0px 2px 0px #707070; */
	border-bottom: 2px solid #e0e0e0;
	outline: none;

	& .react-date-picker__wrapper {
		border: none;
		text-align: center;
		font-size: 1em;

		& .react-date-picker__inputGroup .react-date-picker__inputGroup__input {
			&::placeholder {
				text-align: center;
			}
		}

		& .react-date-picker__calendar-button svg {
			stroke: #98a0a6;
			width: 17px;
			height: 17px;
		}
	}
`;
