import React from 'react';

import styled, { keyframes } from 'styled-components';

export default function Home() {
	return (
		<HomeComponent>
			<h1>Coffee Time</h1>
			<nav>
				
			</nav>
		</HomeComponent>
	);
}

const backgroundAnimation = keyframes`
	0% { background-color: black; }
	100% { background-color: chocolate; }
`

const HomeComponent = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Petemoss&display=swap');

	width: 70%;
	margin: 10px auto;

	filter: drop-shadow(0px 0px 8px chocolate);

	h1 {
		animation-name: ${backgroundAnimation};
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-delay: 0.3s;
		
		color: white;
		text-align: center;

		font-family: 'Petemoss', cursive;
		font-size: 64px;
		
		letter-spacing: 5px;
		word-spacing: 15px;
		
		text-shadow: 0px 0px 2px white;
		
		padding: 10px;
	}
	
	nav {
		margin-top: 30px;
	}
`
