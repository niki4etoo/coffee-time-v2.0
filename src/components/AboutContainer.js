import React from 'react';

import styled from 'styled-components';

import coffeeTime from './images/WEBP/coffeeTime.webp';

export default function AboutContainer(){
	return (
		<>
			<Container>
				<h1>Coffee Time is a project for people who wants to know
				 and schedule their time for coffee drinks.</h1>
				 <img src={coffeeTime} alt="coffee time" />
				 <p>For more information you can check <a href="https://github.com/niki4etoo/coffee-time-v2.0">this</a> out.
				  Any suggetions and tips for this app to be improved are welcomed. You can send me an message to my email: niki4etooo@gmail.com 
				  or send a message via contact page.</p>
			</Container>
		</>
	);
}

const Container = styled.div`
	font-family: 'Estonia', cursive;
	font-weight: 800;
	
	width: 100%;
	text-align: center;
	
	background-color: chocolate;
	color: white;
	text-shadow: 0px 0px 2px black;
	
	filter: drop-shadow(0px 0px 12px chocolate);
	
	h1 {
		text-indent: 30px;
		font-size: 36px;
		letter-spacing: 20px;
		word-spacing: 5px;
		
		color: green;
		
		padding: 10px;
	}
	
	img {
		width: 350px;
		height: 350px;
		padding: 20px 50px;
	}
	
	p {
		font-size: 32px;
		padding: 10px 30px;
		
		letter-spacing: 2px;
		word-spacing: 5px;
	}
`
