import React from 'react';

import styled, { keyframes } from 'styled-components';

export default function HomeContainer(){
	return (
		<>
			<Container>
				<Left>
				Espresso coffee can be made with a wide variety of coffee beans and roast degrees.
				</Left>
				<Right>
				Espresso is the most common way of making coffee in southern Europe,
				  especially in Italy, Spain, Portugal, Switzerland, Southern France, Bulgaria and Greece, and in Australia.
				</Right>
			</Container>
		</>
	);
}

const contentAnimation = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`

const Container = styled.div`

	opacity: 0;

	animation-name: ${contentAnimation};
	animation-duration: 1s;
	animation-delay: 3s;
	animation-fill-mode: forwards;

	font-size: 36px;
	color: white;
	
	background-color: chocolate;
	
	display: flex;
	justify-content: space-around;
`

const Left = styled.div`
	width: 60%;
`

const Right = styled.div`
	width: 100%;
`
