import React from 'react';

import styled from 'styled-components';

import MainNavigation from '../components/MainNavigation';
import ForgetPasswordForm from '../components/ForgetPasswordForm';

export default function ForgetPassword() {
	return (
		<>
		<HomeComponent>
			<h1>Forget Password</h1>
		</HomeComponent>
		<MainNavigation />
		<ForgetPasswordForm />
		</>
	);
}

const HomeComponent = styled.div`
	margin: 10px auto;	
	display: flex;
	justify-content: space-around;
	filter: drop-shadow(0px 0px 5px chocolate);
	
	h1 {	
		background-color: chocolate;
		color: white;
		text-align: center;
		
		font-family: 'Petemoss', cursive;
		font-size: 80px;
		
		letter-spacing: 5px;
		word-spacing: 15px;
		
		text-shadow: 0px 0px 2px white;
		
		padding: 10px;
		width: 100%;
		margin: 0px auto;
		
		transition-property: letter-spacing, text-shadow;
		transition-duration: 0.5s;
	}
	
	h1:hover {
		letter-spacing: 3px;
		text-shadow: 0px 0px 5px white;
		cursor: pointer;
	}
	
`
