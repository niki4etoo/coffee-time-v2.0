import React from 'react';

import styled from 'styled-components';

import {
	Link
} from 'react-router-dom';

export default function MainNavigation(){
	return (
		<>
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
	
	a, a:hover, a:visited {
		color: white;
		text-decoration: none;
	}
	
	ul li:hover {
		text-shadow: 0px 0px 5px white;
		letter-spacing: 2px;
	}	
`
