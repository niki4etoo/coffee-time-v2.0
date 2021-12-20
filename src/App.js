import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';
import { Link } from 'react-router-dom';

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
