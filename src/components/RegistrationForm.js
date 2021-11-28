import React from 'react';

import styled from 'styled-components';

export default function RegistrationForm() {
	return (
		<>
		<Registration>
		 <Form action="" method="post">
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
		</Form>
		</Registration>
		</>
	);
}

const Registration = styled.div`
	font-family: 'Estonia', cursive;
	font-weight: 800;

	width: 100%;
	background-color: chocolate;
	color: white;
	text-shadow: 0px 0px 2px black;
	
	filter: drop-shadow(0px 0px 5px chocolate);
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
	letter-spacing: 3px;
	
	div {
		padding: 10px;
	}
	
	input {
		font-family: 'Petemoss', cursive;
		font-size: 28px;
		letter-spacing: 3px;
	}
	
	button {
		background-color: maroon;
		color: white;
		
		font-family: 'Petemoss', cursive;
		font-size: 32px;
		
		padding: 5px 30px;
		letter-spacing: 3px;
		border: none;
		border-radius: 5px;
	}
	
	button:hover {
		cursor: pointer;
	}
	
`

