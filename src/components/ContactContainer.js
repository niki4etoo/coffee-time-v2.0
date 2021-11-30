import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import '../css/container.css';

export default function ContactContainer(){
	
	useEffect(() => {
		gsap.to(".container", { left: 0, duration: 1, delay: 0.25 });
	}, []);
	
	return (
		<>
			<div className="container">
				<form action="" method="post">
					<div>
						<label for="email"><b>Email</b></label>
					</div>			
					<div>
						<input type="email" placeholder="Enter Email" name="email" required />
					</div>
					
					<div>
						<label for="email"><b>Title</b></label>
					</div>			
					<div>
						<input type="text" placeholder="Your title" name="title" required />
					</div>
					
					<div>
						<label for="message"><b>Message</b></label>
					</div>			
					<div>
						<textarea name="message" placeholder="Your message goes here" rows="4">
						</textarea>
					</div>
					
					
					<div>
						<button type="submit">Send</button><button type="clear">Clear</button>
					</div>
				</form>
			</div>
		</>
	);
}

