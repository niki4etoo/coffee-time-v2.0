import '../scss/app.scss';

<<<<<<< HEAD
import Coffee from './coffee.js';

/* Your JS Code goes here */
const coffeeList = document.getElementById("list-of-coffee-drinks");
=======
var coffeeList = {
  "cappuccino": "Cappuccino",
  "latte": "Latte",
  "americano": "Americano",
  "espresso": "Espresso"
};
>>>>>>> 940aecb59a5bafce9cb9a716923263676fef9c1a

const btn_orderDrink = document.getElementById('btn_orderCoffeeDrink');
const output_result = document.getElementById('output_result');

<<<<<<< HEAD
var coffee = new Coffee();
console.log(coffee);

if(btn_orderDrink != null){
	btn_orderDrink.addEventListener('click', function(){
		output_result.textContent = "You made successfull order! Thanks :)";
	});
=======
btn_orderDrink.addEventListener('click', function(){
	output_result.textContent = "You made successfull order! Thanks :)";
});

for(var item of coffeeList){
  console.log(item);

>>>>>>> 940aecb59a5bafce9cb9a716923263676fef9c1a
}
