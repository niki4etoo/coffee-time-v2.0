import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import RegistrationForm from '../components/RegistrationForm';

export default function Registration() {
	
	return (
		<>
		<div className="header">
			<h1>Registration</h1>
		</div>
		<MainNavigation />
		<RegistrationForm />
		<FooterNavigation />
		</>
	);
}
