import React from 'react';

import styled, { keyframes } from 'styled-components';
import coffeeImageGIF from './images/GIF/coffee.gif';
import coffeeImageGIF2 from './images/GIF/coffeeHeart.gif';
import coffeeImageGIF3 from './images/GIF/coffeeTime2.gif';
import coffeeImageGIF4 from './images/GIF/coffeeTime.gif';

export default function HomeContainer(){
	return (
		<>
			<Container>
				<Left>
				<p>
				Espresso coffee can be made with a wide variety of coffee beans and roast degrees.
				</p>
					<CoffeeImage src={coffeeImageGIF} width="300" height="300"></CoffeeImage>
					<p>
					Espresso is the most common way of making coffee in southern Europe,
				  especially in Italy, Spain, Portugal, Switzerland, Southern France, Bulgaria, Greece, and in Australia.
				  </p>
				  <p>
				  Outside of Italy, cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk,
				   with the surface topped with foamed milk. Cappuccinos are most often prepared with an espresso machine.
				  </p>
				  <CoffeeImage src={coffeeImageGIF3} width="300" height="300"></CoffeeImage>
				  <p>
				   The espresso is poured into the bottom of the cup, followed by a similar amount of hot milk, which is prepared by heating
				    and texturing the milk using the espresso machine steam wand. The top third of the drink consists of milk foam.
				     This foam can be decorated with artistic drawings made with the same milk, called latte art.
				  </p>
				</Left>
				<Right>
					<p>
					Cappuccino is an espresso-based coffee drink that originated in Austria with later development taking 
					place in Italy, and is prepared with steamed milk foam.
					</p>
					<CoffeeImage src={coffeeImageGIF2} width="300" height="300"></CoffeeImage>
					<p>
					Variations of the drink involve the use of cream instead of milk,
					 using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.
					</p>
					<p>Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to,
					 but different flavor from, traditionally brewed coffee.
					</p>
					<CoffeeImage src={coffeeImageGIF4} width="300" height="300"></CoffeeImage>
					<p>
					 The strength of an Americano varies with the number of shots of espresso and the amount of water added.
					</p>
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

	font-size: 32px;
	color: white;
	
	background-color: chocolate;
	
	display: flex;
	justify-content: space-around;
`

const Left = styled.div`
	margin: 10px;
	width: 80%;
	p {
		text-indent: 20px;
	}
`

const Right = styled.div`
	margin: 10px;
	text-align: right;
	width: 80%;
	p {
		text-indent: 20px;
	}
`

const CoffeeImage = styled.img`
	margin: 20px 20px;
	
	filter: drop-shadow(0px 0px 18px bisque);
	
	transition-property: filter;
	transition-duration: 0.5s;
	transition-timing-function: ease-in;
	
	:hover {
		filter: drop-shadow(0px 0px 9px bisque);
		cursor: pointer;
		
	}
`
