import React from 'react';

import styled, { keyframes } from 'styled-components';

import coffeeLogoGIF from '../images/GIF/coffee.gif';

export default function CoffeeLogo(){
	return (
	<>
		<CoffeeTitle>Coffee Time</CoffeeTitle>
		<CoffeeLogoImage src={coffeeLogoGIF} width="300" height="300"></CoffeeLogoImage>
	</>
	);
}


const animationCoffeeTitle = keyframes`
	0% { opacity: 0; transform: translateY(-200px); }
	50% { opacity: 0.5; transform: translateY(0px); }
	100% { opacity: 1; }
`

const animationCoffeeLogo = keyframes`
	0% { opacity: 0; transform: translateY(-200px); }
	100% { opacity: 1; transofrm: translateY(0px); }
`

const CoffeeTitle = styled.h1`

	animation-name: ${animationCoffeeTitle};
	animation-duration: 0.7s;
	animation-fill-mode: forwards;
	
	text-shadow: 4px 4px 12px bisque;
	
	text-align: center;
	font-family: 'Petemoss', cursive;
	font-size: 64px;
	letter-spacing: 10px;
	word-spacing: 80px;
	
	margin: 30px auto;
	width: 55%;
	
	background-color: bisque;
	color: chocolate;

	transition-property: letter-spacing, word-spacing;
	transition-duration: 1s;
	
	:hover {
		letter-spacing: 5px;
		word-spacing: 40px;
		cursor: pointer;
	}
`

const CoffeeLogoImage = styled.img`
	opacity: 0;
	animation-name: ${animationCoffeeLogo};
	animation-duration: 0.9s;
	animation-delay: 0.5s;
	animation-fill-mode: forwards;
	
	
	
	filter: drop-shadow(0px 0px 18px bisque);
	
	transition-property: filter, width, height;
	transition-duration: 0.5s;
	transition-timing-function: ease-in;
	
	:hover {
		filter: drop-shadow(0px 0px 9px bisque);
		cursor: pointer;
		
	}
`
