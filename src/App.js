import './App.css';

import CoffeeLogo from './components/intro/CoffeeLogo';

import { Link } from 'react-router-dom';

export default function App() {
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
