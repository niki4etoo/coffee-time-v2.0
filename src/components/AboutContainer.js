import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import '../css/container.css';

import coffeeTime from './images/WEBP/coffeeTime.webp';

export default function AboutContainer(){
	
	useEffect(() => {
		gsap.to('.container', { left: 0, duration: 1 }); 
	}, []);
	
	return (
		<>
			<div className="container about">
				<h1>Coffee Time is a project for people who wants to know
				 and schedule their time for coffee drinks.</h1>
				 <p><img src={coffeeTime} alt="coffee time" /></p>
				 <p>For more information you can check <a href="https://github.com/niki4etoo/coffee-time-v2.0">this</a> out.
				  Any suggetions and tips for this app to be improved are welcomed. You can send me an message to my email: niki4etooo@gmail.com 
				  or send a message via contact page.</p>
			</div>
		</>
	);
}

