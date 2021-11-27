const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const db = require('./queries');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.get('/', (request, response) => {
	
	const userAgent = request.get('User-Agent');
	const readableState = request._readableState;
	
	response.json({
		info: 'Node.js, Express and Postgres API',
		userAgent: userAgent,
		readableState: readableState,
	});
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

const port = 3000, host = "localhost";

app.listen(port, () => {
	console.log(`The server is listening on ${host}:${port}`);
});






