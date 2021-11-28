import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function FooterNavigation(){
	return (
		<>
			<Navigation>
				<ul>
					<li><Link to="/Contact">Contact</Link></li>
					<li><a href="https://github.com/niki4etoo/coffee-time-v2.0">GitHub</a></li>
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
		text-shadow: 0px 0px 2px black;
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
