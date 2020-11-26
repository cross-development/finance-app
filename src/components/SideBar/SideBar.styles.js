//Core
import styled from 'styled-components';
//Assets
import bgImg from 'assets/EllipseBlue.png';

export const StyledSideBar = styled.aside`
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-position: bottom left;
	background-size: contain;
	flex: 0 0 30%;
	height: 90vh;
	background-color: #e7eaf2;
	display: flex;
	justify-content: center;
	align-items: stretch;
`;

export const StyledBackdrop = styled.div`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: stretch;
	height: auto;
`;

export const StyledContainer = styled.div`
	height: auto;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
`;
