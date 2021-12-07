import React from 'react';

import '../../App.css';

import coffeeLogoGIF from '../images/GIF/coffee.gif';

export default function CoffeeLogo(){
	return (
	<>
		<div className="logoTitle"><h1>Coffee Time</h1></div>
		<div id="coffeeLogo"><img src={coffeeLogoGIF} width="300" height="300" alt="coffee logo" /></div>
	</>
	);
}
