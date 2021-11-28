import React from 'react';

import styled from 'styled-components';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import HomeContainer from '../components/HomeContainer';

export default function Home() {
	return (
		<>
		<HomeComponent>
			<h1>Coffee Time</h1>
		</HomeComponent>
		<MainNavigation />
		<HomeContainer />
		<FooterNavigation />
		</>
	);
}

const HomeComponent = styled.div`
	margin: 10px auto;	
	display: flex;
	justify-content: space-around;
	filter: drop-shadow(0px 0px 5px chocolate);
	
	h1 {	
		background-color: chocolate;
		color: white;
		text-align: center;
		
		font-family: 'Petemoss', cursive;
		font-size: 80px;
		
		letter-spacing: 5px;
		word-spacing: 15px;
		
		text-shadow: 0px 0px 2px black;
		
		padding: 10px;
		width: 100%;
		margin: 0px auto;
		
		transition-property: letter-spacing, text-shadow;
		transition-duration: 0.5s;
	}
	
	h1:hover {
		letter-spacing: 3px;
		text-shadow: 0px 0px 5px white;
		cursor: pointer;
	}
	
`
