import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';

import {
	BrowserRouter as Router,
	Routes, 
	Route,
	Link
} from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

function App() {
  return (
  <>
  <Link to="/Home">
    <div className="Main">
		<CoffeeLogo />
    </div>
    </Link>
    </>
  );
}

const proceedAnimation = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`

const Proceed = styled.div`
	margin: 30px auto;
	width: 200px;
	
	text-align: center;
	text-decoration: none;
	font-size: 42px;
	font-family: 'Petemoss', cursive;
	letter-spacing: 3px;
	
	background-color: bisque;
	color: chocolate;
	
	text-shadow: 2px 2px 5px white;
	
	animation-name: ${proceedAnimation};
	animation-duration: 1s;
	animation-delay: 0.8s;
	animation-fill-mode: forwards;
	opacity: 0;	
	
	a, a:visited {
		text-decoration: none;
		color: chocolate;
		text-shadow: 2px 2px 5px white;
		
		transition-property: letter-spacing, text-shadow;
		transition-duration: 0.8s;
	}
	
	a:hover {
		text-decoration: none;
		letter-spacing: 2px;
		text-shadow: 1px 1px 3px bisque;
	}
`

export default App;
