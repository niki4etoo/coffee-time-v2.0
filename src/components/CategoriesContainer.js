import React from 'react';

import styled from 'styled-components';

import espresso1 from './images/drinks/espresso1.webp';
import espresso2 from './images/drinks/espresso2.webp';
import espresso3 from './images/drinks/espresso3.webp';

import cappuccino1 from './images/drinks/cappuccino1.webp';
import cappuccino2 from './images/drinks/cappuccino2.webp';
import cappuccino3 from './images/drinks/cappuccino3.webp';

import frappe1 from './images/drinks/frappe1.webp';
import frappe2 from './images/drinks/frappe2.webp';
import frappe3 from './images/drinks/frappe3.webp';

import icedcoffee1 from './images/drinks/icedcoffee1.webp';
import icedcoffee2 from './images/drinks/icedcoffee2.webp';
import icedcoffee3 from './images/drinks/icedcoffee3.webp';

export default function CategoriesContainer(){
	return (
		<>
			<Container>
				<h1>Hot Drinks</h1>
				<CardContainer>
					<Card>
						<img src={espresso1} alt="espresso1" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</Card>
					<Card>
						<img src={espresso2} alt="espresso2" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</Card>
					<Card>
						<img src={espresso3} alt="espresso3" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</Card>
					
					<Card>
						<img src={cappuccino1} alt="cappuccino1" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</Card>
					<Card>
						<img src={cappuccino2} alt="cappuccino2" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</Card>
					<Card>
						<img src={cappuccino3} alt="cappuccino3" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</Card>
					</CardContainer>
					<h1>Cold Drinks</h1>
					<CardContainer>
					<Card>
						<img src={frappe1} alt="frappe1" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</Card>
					<Card>
						<img src={frappe2} alt="frappe2" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</Card>
					<Card>
						<img src={frappe3} alt="frappe3" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</Card>
					
					<Card>
						<img src={icedcoffee1} alt="icedcoffee1" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</Card>
					<Card>
						<img src={icedcoffee2} alt="icedcoffee2" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</Card>
					<Card>
						<img src={icedcoffee3} alt="icedcoffee3" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</Card>
				</CardContainer>
			</Container>
		</>
	);
}

const Container = styled.div`
	font-family: 'Estonia', cursive;
	font-weight: 800;

	width: 100%;
	background-color: chocolate;
	color: white;
	text-shadow: 0px 0px 2px black;
	
	padding: 40px 0px;
	
	h1 {
		text-align: center;
		
		padding: 10px;
		
		font-size: 36px;
		letter-spacing: 3px;
		word-spacing: 10px;
	}
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 30px;
	
	padding: 10px;
	
	justify-content: space-evenly;
	align-items: center;
`

const Card = styled.div`
	
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	background-color: maroon;
	color: white;
	
	border-radius: 15px;
	
	justify-content: center;
	align-items: center;
	
	filter: drop-shadow(0px 5px 12px bisque);
	
	transition-property: filter;
	transition-duration: 0.5s;
	
	:hover {
		filter: drop-shadow(0px 2px 6px darkblue);
		cursor: pointer;
	}
	
	img {
		padding: 10px;
		width: 200px;
		height: 200px;
		max-width: 200px;
		max-height: 200px;
	}
	
	h1 {
		font-size: 36px;
		letter-spacing: 5px;
		padding: 0px;
		margin: 0px;
	}
	
	p {
		padding: 0px 10px;
		font-size: 28px;
		letter-spacing: 2px;
	}
`


