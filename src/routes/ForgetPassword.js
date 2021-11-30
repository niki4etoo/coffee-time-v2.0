import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import ForgetPasswordForm from '../components/ForgetPasswordForm';

export default function ForgetPassword() {
	return (
		<>
		<div className="header">
			<h1>Forget Password</h1>
		</div>
		<MainNavigation />
		<ForgetPasswordForm />
		<FooterNavigation />
		</>
	);
}
