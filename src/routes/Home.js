import React from 'react';

import styled, { keyframes } from 'styled-components';

import {
	BrowserRouter as Router,
	Routes, 
	Route,
	Link
} from 'react-router-dom';

import HomeContainer from '../components/HomeContainer';

export default function Home() {
	return (
		<>
		<HomeComponent>
			<h1>Coffee Time</h1>
		</HomeComponent>
		<Navigation>
				<ul>
					<li><Link to="/Home">Home</Link></li>
					<li><Link to="/Login">Login</Link></li>
					<li><Link to="/Registration">Registration</Link></li>
					<li><Link to="/Categories">Categories</Link></li>
					<li><Link to="/About">About</Link></li>
				</ul>
		</Navigation>
		<HomeContainer></HomeContainer>
		</>
	);
}

const backgroundAnimation = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; background-color: chocolate; filter: drop-shadow(0px 0px 12px chocolate); }
`

const headlineAnimation = keyframes`
	0% { opacity: 0; transform: translateX(-50px); background-color: chocolate; }
	100% { opacity: 1; transform: translateX(0px); background-color: chocolate; }
`

const HomeComponent = styled.div`
	margin: 10px auto;	

	opacity: 0;
	animation-name: ${backgroundAnimation};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	
	display: flex;
	justify-content: space-around;
	
	h1 {	
		opacity: 0;
		animation-name: ${headlineAnimation};
		animation-duration: 0.8s;
		animation-delay: 1s;
		animation-fill-mode: forwards;
		
		
		
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

const navigationAnimation = keyframes`
	0% { opacity: 0; transform: translateX(-50px), translateY(-50px); }
	100% { opacity: 1; transform: translateX(0px), translateY(0px); }
`

const Navigation = styled.nav`
	
	margin: 20px auto;
	
	ul {
		display: flex;
		justify-content: center;
		
		filter: drop-shadow(0px 0px 5px chocolate);
		list-style: none;
		
		background-color: chocolate;
		color: white;
		
		font-size: 48px;
		font-family: 'Petemoss', bold;
		
		opacity: 0;
		animation-name: ${navigationAnimation};
		animation-duration: 0.7s;
		animation-fill-mode: forwards;
	}
	
	ul li {
		
		opacity: 0;
		
		animation-name: ${navigationAnimation};
		animation-duration: 0.7s;
		animation-fill-mode: forwards;
		background-color: chocolate;
		padding: 10px 60px 10px 30px;
		
		cursor: pointer;
		
		transition-property: text-shadow, letter-spacing;
		transition-duration: 0.6s;
	}
	
	a, a:hover, a:visited {
		color: white;
		text-decoration: none;
	}
	
	ul li:hover {
		text-shadow: 0px 0px 5px white;
		letter-spacing: 2px;
	}
	
	
	ul li:nth-child(1) {
		animation-delay: 2s;
	}
	
	ul li:nth-child(2) {
		animation-delay: 2.2s;
	}
	
	ul li:nth-child(3) {
		animation-delay: 2.4s;
	}
	
	ul li:nth-child(4) {
		animation-delay: 2.6s;
	}
	
	ul li:nth-child(5) {
		animation-delay: 2.8s;
	}
	
`
