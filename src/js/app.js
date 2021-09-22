import '../scss/app.scss';

import Coffee from './coffee.js';

/* Your JS Code goes here */
const coffeeList = document.getElementById("list-of-coffee-drinks");

const btn_orderDrink = document.getElementById('btn_orderCoffeeDrink');
const output_result = document.getElementById('output_result');

var coffee = new Coffee();
console.log(coffee);

if(btn_orderDrink != null){
	btn_orderDrink.addEventListener('click', function(){
		output_result.textContent = "You made successfull order! Thanks :)";
	});
}
