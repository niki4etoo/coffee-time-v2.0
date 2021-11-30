import React, { useEffect } from 'react';
import { gsap } from 'gsap';


export default function RegistrationForm() {
	
	useEffect(() => {
		gsap.to(".container", { left: 0, duration: 1, delay: 0.25 });
	}, []);
	
	return (
		<>
		<div className="container">
			 <form action="" method="post">
				<div>
					<label for="uname"><b>Username</b></label>
				</div>			
				<div>
					<input type="text" placeholder="Enter Username" name="uname" required />
				</div>

				<div>
					<label for="email"><b>Email</b></label>
				</div>			
				<div>
					<input type="email" placeholder="Enter Email" name="email" required />
				</div>

				<div>
					<label for="psw"><b>Password</b></label>
				</div>
				<div>
					<input type="password" placeholder="Enter Password" name="psw" required />
				</div>
				
				<div>
					<label for="pswrepeat"><b>Repeat Password</b></label>
				</div>
				<div>
					<input type="password" placeholder="Enter Password Again" name="pswrepeat" required />
				</div>
				
				<div>
					<button type="submit">Registration</button>
				</div>
			</form>
		</div>
		</>
	);
}

