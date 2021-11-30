import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import LoginForm from '../components/LoginForm';

import { gsap } from 'gsap';

export default function Login() {
	return (
		<>
		<div className="header">
			<h1>Login</h1>
		</div>
		<MainNavigation/>
		<LoginForm/>
		<FooterNavigation />
		</>
	);
}
