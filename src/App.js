import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function App() {
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
