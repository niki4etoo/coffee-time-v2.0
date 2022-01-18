import React, { useEffect } from 'react';

import '../css/container.css';

import coffeeImage1 from './images/GIF/coffee.gif';
import coffeeImage4 from './images/WEBP/coffeeHeart.webp';

import { gsap } from 'gsap';

export default function HomeContainer(){
	
	useEffect(() => {
		gsap.to(".container", { left: 0, duration: 1, delay: 0.25 });
	}, []);
	
	return (
		<>
			<div className="container">
				<div className="left">
				<p>
				Espresso coffee can be made with a wide variety of coffee beans and roast degrees.
				</p>
					<img src={coffeeImage1} id="espressoCoffeeGIF" width="366" height="480" alt="espresso coffee" />
					<p>
					Espresso is the most common way of making coffee in southern Europe,
				  especially in Italy, Spain, Portugal, Switzerland, Southern France, Bulgaria, Greece, and in Australia.
				  </p>
				  <p>
				  Outside of Italy, cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk,
				   with the surface topped with foamed milk. Cappuccinos are most often prepared with an espresso machine.
				  </p>
				</div>
				<div className="right">
					<p>
					Cappuccino is an espresso-based coffee drink that originated in Austria with later development taking 
					place in Italy, and is prepared with steamed milk foam.
					</p>
					<p>
					Variations of the drink involve the use of cream instead of milk,
					 using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.
					</p>
					<img src={coffeeImage4} width="300" height="300" alt="coffee with foam" />
					<p>
					 The strength of an Americano varies with the number of shots of espresso and the amount of water added.
					</p>
				</div>
			</div>
		</>
	);
}
