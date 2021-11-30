import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import { Link } from 'react-router-dom';

import '../css/container.css';

export default function LoginForm() {
	
	useEffect(() => {
			gsap.to('.container', { left: 0, duration: 1, delay: 0.25 });
		}, []);
	
	return (
		<>
		<div className="container">
			<form action="" method="post">
				<div>
					<label htmlFor="uname"><b>Username</b></label>
				</div>			
				<div>
					<input type="text" placeholder="Enter Username" name="uname" required />
				</div>

				<div>
					<label htmlFor="psw"><b>Password</b></label>
				</div>
				<div>
					<input type="password" placeholder="Enter Password" name="psw" required />
				</div>

				<div>
					<button type="submit">Login</button>
					<label><input type="checkbox" name="remember" />Remember me</label>
				</div>

				<div>
					<button type="button" className="cancelbtn">Cancel</button>
				</div>
				<div>
					<span className="psw">Forgot <Link to="/ForgetPassword">password?</Link></span>
				</div>
			</form>
		</div>
		</>
	);
}

