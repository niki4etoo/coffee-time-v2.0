import React from 'react';

import styled from 'styled-components';
import coffeeImage1 from './images/WEBP/coffee.webp';
import coffeeImage4 from './images/WEBP/coffeeHeart.webp';

export default function HomeContainer(){
	return (
		<>
			<Container>
				<Left>
				<p>
				Espresso coffee can be made with a wide variety of coffee beans and roast degrees.
				</p>
					<CoffeeImage src={coffeeImage1} width="300" height="300" />
					<p>
					Espresso is the most common way of making coffee in southern Europe,
				  especially in Italy, Spain, Portugal, Switzerland, Southern France, Bulgaria, Greece, and in Australia.
				  </p>
				  <p>
				  Outside of Italy, cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk,
				   with the surface topped with foamed milk. Cappuccinos are most often prepared with an espresso machine.
				  </p>
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
					<p>
					Variations of the drink involve the use of cream instead of milk,
					 using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.
					</p>
					<p>Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to,
					 but different flavor from, traditionally brewed coffee.
					</p>
					<CoffeeImage src={coffeeImage4} width="300" height="300" />
					<p>
					 The strength of an Americano varies with the number of shots of espresso and the amount of water added.
					</p>
				</Right>
			</Container>
		</>
	);
}

const Container = styled.div`

	filter: drop-shadow(0px 0px 5px chocolate);
	
	letter-spacing: 2px;
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
