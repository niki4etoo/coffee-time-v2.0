import React from 'react';

import styled from 'styled-components';

export default function ContactContainer(){
	return (
		<>
			<Container>
				<Form action="" method="post">
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
				</Form>
			</Container>
		</>
	);
}

const Container = styled.div`
	font-family: 'Estonia', cursive;
	font-weight: 800;

	width: 100%;
	text-align: center;
	
	background-color: chocolate;
	color: white;
	text-shadow: 0px 0px 2px black;
	
	filter: drop-shadow(0px 0px 12px chocolate);
	
	h1 {
		text-indent: 30px;
		font-size: 36px;
		letter-spacing: 2px;
		word-spacing: 5px;
		
		padding: 10px;
	}
	
	img {
		width: 350px;
		height: 350px;
		padding: 20px 50px;
	}
	
	p {
		font-size: 32px;
		padding: 10px 30px;
		
		letter-spacing: 2px;
		word-spacing: 5px;
	}
	
	
`

const Form = styled.form`
	
	font-size: 32px;
	
	margin: 0px auto;
	width: 40%;
	
	padding: 15px;
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	text-align: center;
	letter-spacing: 4px;
	
	div {
		padding: 10px;
	}
	
	input {
		font-family: 'Petemoss', cursive;
		font-size: 28px;
		letter-spacing: 3px;
	}
	
	textarea {
		font-family: 'Petemoss', cursive;
		font-size: 28px;
		letter-spacing: 3px;
	}
	
	button {
		background-color: maroon;
		color: white;
		
		font-family: 'Petemoss', cursive;
		font-size: 32px;
		
		margin: 0px 20px;
		padding: 5px 30px;
		letter-spacing: 3px;
		border: none;
		border-radius: 5px;
	}
	
	button:hover {
		cursor: pointer;
	}
`

