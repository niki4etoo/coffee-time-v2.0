import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import '../css/container.css';

import espresso1 from './images/drinks/espresso1.webp';
import espresso2 from './images/drinks/espresso2.webp';
import espresso3 from './images/drinks/espresso3.webp';

import cappuccino1 from './images/drinks/cappuccino1.webp';
import cappuccino2 from './images/drinks/cappuccino2.webp';
import cappuccino3 from './images/drinks/cappuccino3.webp';

import frappe1 from './images/drinks/frappe1.webp';
import frappe2 from './images/drinks/frappe2.webp';
import frappe3 from './images/drinks/frappe3.webp';

import icedcoffee1 from './images/drinks/icedcoffee1.webp';
import icedcoffee2 from './images/drinks/icedcoffee2.webp';
import icedcoffee3 from './images/drinks/icedcoffee3.webp';

export default function CategoriesContainer(){
	
	useEffect(() => {
		gsap.to(".categories", { left: 0, duration: 1, delay: 0.25 });
	}, []);
	
	return (
		<>
			<div className="categories">
				<h1>Hot Drinks</h1>
				<div className="cards">
					<div className="card">
						<img src={espresso1} alt="espresso1" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</div>
					<div className="card">
						<img src={espresso2} alt="espresso2" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</div>
					<div className="card">
						<img src={espresso3} alt="espresso3" />
						<h1>Espresso</h1>
						<p>There are several cups of espresso you can buy now.</p>
					</div>
					
					<div className="card">
						<img src={cappuccino1} alt="cappuccino1" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</div>
					<div className="card">
						<img src={cappuccino2} alt="cappuccino2" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</div>
					<div className="card">
						<img src={cappuccino3} alt="cappuccino3" />
						<h1>Cappuccino</h1>
						<p>Cappuccino now is limited offer. Buy it now.</p>
					</div>
				</div>
					<h1>Cold Drinks</h1>
				<div className="cards">
					<div className="card">
						<img src={frappe1} alt="frappe1" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</div>
					<div className="card">
						<img src={frappe2} alt="frappe2" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</div>
					<div className="card">
						<img src={frappe3} alt="frappe3" />
						<h1>Frappe</h1>
						<p>The coffee drink named "Frappe" is the best iced coffee.</p>
					</div>
					
					<div className="card">
						<img src={icedcoffee1} alt="icedcoffee1" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</div>
					<div className="card">
						<img src={icedcoffee2} alt="icedcoffee2" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</div>
					<div className="card">
						<img src={icedcoffee3} alt="icedcoffee3" />
						<h1>Iced Coffee</h1>
						<p>Iced coffee drink with different pastries.</p>
					</div>
				</div>
			</div>
		</>
	);
}
