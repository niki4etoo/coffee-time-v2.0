import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function LoginForm() {
	return (
		<>
		<Login>
		 <Form action="" method="post">
			<div>
				<label for="uname"><b>Username</b></label>
			</div>			
			<div>
				<input type="text" placeholder="Enter Username" name="uname" required />
			</div>

			<div>
				<label for="psw"><b>Password</b></label>
			</div>
			<div>
				<input type="password" placeholder="Enter Password" name="psw" required />
			</div>

			<div>
				<button type="submit">Login</button>
				<label><input type="checkbox" checked="checked" name="remember" />Remember me</label>
			</div>

			<div>
				<button type="button" class="cancelbtn">Cancel</button>
			</div>
			<div>
				<span class="psw">Forgot <Link to="/ForgetPassword">password?</Link></span>
			</div>
		</Form>
		</Login>
		</>
	);
}

const Login = styled.div`
	width: 100%;
	background-color: chocolate;
	color: white;
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

