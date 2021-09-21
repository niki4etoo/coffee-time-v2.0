import '../scss/app.scss';

var coffeeList = {
  "cappuccino": "Cappuccino",
  "latte": "Latte",
  "americano": "Americano",
  "espresso": "Espresso"
};

const btn_orderDrink = document.getElementById('btn_orderCoffeeDrink');
const output_result = document.getElementById('output_result');

btn_orderDrink.addEventListener('click', function(){
	output_result.textContent = "You made successfull order! Thanks :)";
});

for(var item of coffeeList){
  console.log(item);

}
