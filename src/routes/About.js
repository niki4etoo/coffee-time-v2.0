import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import AboutContainer from '../components/AboutContainer';

export default function About() {
	return (
		<>
		<div className="header">
			<h1>About</h1>
		</div>
		<MainNavigation />
		<AboutContainer />
		<FooterNavigation />
		</>
	);
}

