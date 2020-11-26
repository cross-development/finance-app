//Core
import styled from 'styled-components';
//Assets
import EllipseOrange from 'assets/EllipseOrange.png';

export const StyledTransactsWrap = styled.div`
	width: 100%;
	height: 90vh;
	background-image: url(${EllipseOrange});
	background-repeat: no-repeat;
	background-position: top right;
	background-size: contain;
	background-color: #e7eaf2;
	border-left: 2px solid #d1d1d1;
`;

export const StyledBackdrop = styled.div`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 90vh;
	padding: 2rem 5rem 0 5rem;
	position: relative;
`;
