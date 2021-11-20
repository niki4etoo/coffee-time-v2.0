import React from 'react';

import styled from 'styled-components';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import CategoriesContainer from '../components/CategoriesContainer';

export default function Categories() {
	return (
		<>
		<HomeComponent>
			<h1>Categories</h1>
		</HomeComponent>
		<MainNavigation />
		<CategoriesContainer />
		<FooterNavigation />
		</>
	);
}

const HomeComponent = styled.div`
	margin: 10px auto;	
	
	filter: drop-shadow(0px 0px 12px chocolate);
	background-color: chocolate;
	display: flex;
	justify-content: space-around;
	
	h1 {		
		color: white;
		text-align: center;
		
		font-family: 'Petemoss', cursive;
		font-size: 80px;
		
		letter-spacing: 5px;
		word-spacing: 15px;
		
		text-shadow: 0px 0px 2px white;
		
		padding: 10px;
		width: 30%;
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

