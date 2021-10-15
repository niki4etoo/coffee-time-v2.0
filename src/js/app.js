import '../scss/app.scss';
import Coffee from './coffee.js';

var coffee = new Coffee();

if(btn_orderDrink != null){
	btn_orderDrink.addEventListener('click', function(){
	output_result.textContent = "You made successfull order! Thanks :)";
});
}
