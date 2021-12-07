import React from 'react';

import '../css/navigation.css';

import { Link } from 'react-router-dom';

export default function FooterNavigation(){
	return (
		<>
			<nav>
				<ul>
					<li><Link to="/Contact">Contact</Link></li>
					<li><a href="https://github.com/niki4etoo/coffee-time-v2.0">GitHub</a></li>
				</ul>
			</nav>
		</>
	);
}
