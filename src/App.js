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
    <div className="Main">
		<CoffeeLogo />
    </div>
    <Proceed>
		<Link to="/Home">Proceed</Link>
    </Proceed>
    
    </>
  );
}

const proceedAnimation = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`

const Proceed = styled.div`
	margin-top: 50px;
	
	text-align: center;
	text-decoration: none;
	font-size: 42px;
	font-family: 'Petemoss', cursive;
	letter-spacing: 3px;
	color: chocolate;
	text-shadow: 2px 2px 5px white;
	
	animation-name: ${proceedAnimation};
	animation-duration: 1s;
	animation-delay: 3s;
	animation-direction: forward;
	animation-fill-mode: forwards;
	opacity: 0;	
	
	a, a:visited {
		text-decoration: none;
		color: chocolate;
		text-shadow: 2px 2px 5px white;
	}
	
	a:hover {
		text-decoration: none;
		color: bisque;
		text-shadow: 1px 1px 3px bisque;
	}
	
	
	
`

export default App;
