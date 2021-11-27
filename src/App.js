import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
	
	
	fetch('/users', {
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
			console.log(data);
		});
	
	return (
	<>
	<Logo>
	<Link to="/Home">
		<CoffeeLogo />
	</Link>
	</Logo>
	</>
	);
}

const Logo = styled.div`
	text-align: center;

	a, a:hover, a:visited {
		text-decoration: none;
	}
`
