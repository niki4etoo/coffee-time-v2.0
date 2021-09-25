export default class Coffee {
	lists = {
		mocca: "Mocca",
		moccachino: "Moccachino",
		latte: "Latte",
		americano: "Americano",
		espresso: "Espresso"
	};

	

	constructor(){
		var coffeeList = document.getElementById("coffeeList");
		for(var l in this.lists){
			coffeeList.innerText += l + "\n";
		}
	}

}

var coffee = new Coffee();
