import styled, { keyframes } from 'styled-components';

import coffeeLogo from './images/GIF/coffee.gif';

import './App.css';

function App() {
  return (
    <div className="Main">
		<CoffeeTitle>Coffee Time</CoffeeTitle>
		<CoffeeLogo src={coffeeLogo} width="300" height="300"></CoffeeLogo>
    </div>
  );
}

const animationCoffeeTitle = keyframes`
	0% { opacity: 0; transform: translateY(-200px); }
	50% { opacity: 0.5; transform: translateY(0px); }
	100% { opacity: 1; }
`

const animationCoffeeLogo = keyframes`
	0% { opacity: 0; transform: translateY(-200px); }
	100% { opacity: 1; transofrm: translateY(0px); }
`

const CoffeeTitle = styled.h1`
	animation-name: ${animationCoffeeTitle};
	animation-duration: 2s;
	animation-fill-mode: forwards;
`

const CoffeeLogo = styled.img`
	opacity: 0;
	animation-name: ${animationCoffeeLogo};
	animation-duration: 2s;
	animation-delay: 2s;
	animation-fill-mode: forwards;
`

export default App;
