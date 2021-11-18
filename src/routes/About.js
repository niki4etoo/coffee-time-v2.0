import React from 'react';

import styled, { keyframes } from 'styled-components';

import {
	BrowserRouter as Router,
	Routes, 
	Route,
	Link
} from 'react-router-dom';

export default function About() {
	return (
		<>
		<HomeComponent>
			<h1>About</h1>
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
	}
	
	ul li {
		background-color: chocolate;
		padding: 10px 60px 10px 30px;
		
		cursor: pointer;
		
		transition-property: text-shadow, letter-spacing;
		transition-duration: 0.6s;
	}
	
	ul li:hover {
		text-shadow: 0px 0px 5px white;
		letter-spacing: 2px;
	}
	
	a, a:hover, a:visited {
		color: white;
		text-decoration: none;
	}	
`



