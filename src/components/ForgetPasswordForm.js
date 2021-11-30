import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import '../css/container.css';

export default function ForgetPasswordForm() {
	
	useEffect(() => {
			gsap.to('.container', { left: 0, duration: 1, delay: 0.25 });
		}, []);
		
	return (
		<>
		<div className="container">
			 <form action="" method="post">
				<div>
					<label for="uname"><b>Username</b></label>
				</div>			
				<div>
					<input type="text" placeholder="Enter Username" name="uname" />
				</div>

				<div>
					<label for="email"><b>Email</b></label>
				</div>			
				<div>
					<input type="email" placeholder="Enter Email" name="email" required />
				</div>

				<div>
					<button type="submit">Send</button>
				</div>
			 </form>
		</div>
		</>
	);
}

