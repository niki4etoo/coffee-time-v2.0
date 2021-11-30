import React from 'react';

import '../css/Header.css';

import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';

import CategoriesContainer from '../components/CategoriesContainer';



export default function Categories() {
	
	return (
		<>
		<div className="header">
			<h1>Categories</h1>
		</div>
		<MainNavigation />
		<CategoriesContainer />
		<FooterNavigation />
		</>
	);
}

