const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const db = require('./queries');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.get('/', (request, response) => {
	
	response.json({
		info: 'Node.js, Express and Postgres API'
	});
});

app.get('/users', db.getUsers);
app.get('/users/:criteria', db.getUserByCriteria);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

const port = 3001, host = "localhost";

app.listen(port, () => {
	console.log(`The server is listening on ${host}:${port}`);
});

function extractInfoFromServer(){
	fetch('/users/Elaine', {
		  headers: { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		})
	.then(response => {
			if(response.status === 200){
				return response.json();
			}
	})
	.then(data => {
		for(var d of data){
			console.log("id: " + d.id);
			console.log("name: " + d.name);
			console.log("email: " + d.email);
			
		}
	}).catch(error => {
		console.log(error);
	});
}




