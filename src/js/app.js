import '../scss/app.scss';

/* Your JS Code goes here */
const coffeeList = document.getElementById("list-of-coffee-drinks");

const btn_orderDrink = document.getElementById('btn_orderCoffeeDrink');
const output_result = document.getElementById('output_result');

btn_orderDrink.addEventListener('click', function(){
	output_result.textContent = "You made successfull order! Thanks :)");
});
