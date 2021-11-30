import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import HomeContainer from '../components/HomeContainer';

export default function Home() {

	return (
		<>
		<div className="header">
			<h1>Coffee Time</h1>
		</div>
		<MainNavigation />
		<HomeContainer />
		<FooterNavigation />
		</>
	);
}
