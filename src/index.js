import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Registration from './routes/Registration';
import Categories from './routes/Categories';
import About from './routes/About';
import ForgetPassword from './routes/ForgetPassword';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<App />} />
		<Route path="Home" element={<Home />} />
		<Route path="Login" element={<Login />} />
		<Route path="Registration" element={<Registration />} />
		<Route path="Categories" element={<Categories />} />
		<Route path="About" element={<About />} />
		<Route path="ForgetPassword" element={<ForgetPassword />} />
	</Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
