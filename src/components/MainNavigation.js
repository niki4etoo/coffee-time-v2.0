import React from 'react';

import '../css/navigation.css';

import {
	Link
} from 'react-router-dom';

export default function MainNavigation(){
	return (
		<>
		<nav>
			<ul>
				<li><Link to="/Home">Home</Link></li>
				<li><Link to="/Login">Login</Link></li>
				<li><Link to="/Registration">Registration</Link></li>
				<li><Link to="/Categories">Categories</Link></li>
				<li><Link to="/About">About</Link></li>
			</ul>
		</nav>
		</>
	);
}

