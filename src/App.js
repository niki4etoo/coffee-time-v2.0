import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';
import { Link } from 'react-router-dom';

fetch('/users/Elaine', {
		  headers: { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		})
	.then(response => {
			if(response.status === 200){
				return response.json();
			}
	})
	.then(data => {
		for(var d of data){
			console.log("id: " + d.id);
			console.log("name: " + d.name);
			console.log("email: " + d.email);
			
		}
	}).catch(error => {
			console.log(error);
		});

export default function App() {
	
	return (
	<>
		<div className="logo">
			<Link to="/Home">
				<CoffeeLogo />
			</Link>
		</div>
	</>
	);
}
