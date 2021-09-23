import '../scss/app.scss';
import Coffee from './coffee.js';

var coffeeList = {
  "cappuccino": "Cappuccino",
  "latte": "Latte",
  "americano": "Americano",
  "espresso": "Espresso"
};

const btn_orderDrink = document.getElementById('btn_orderCoffeeDrink');
const output_result = document.getElementById('output_result');

var coffee = new Coffee();

if(btn_orderDrink != null){
	btn_orderDrink.addEventListener('click', function(){
	output_result.textContent = "You made successfull order! Thanks :)";
});
