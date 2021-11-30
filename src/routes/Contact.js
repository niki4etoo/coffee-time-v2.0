import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import ContactContainer from '../components/ContactContainer';

export default function Contact() {
	return (
		<>
		<div className="header">
			<h1>Contact</h1>
		</div>
		<MainNavigation />
		<ContactContainer />
		<FooterNavigation />
		</>
	);
}
