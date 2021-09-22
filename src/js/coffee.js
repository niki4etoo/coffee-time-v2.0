export default class Coffee {
	lists = {
		mocca: "Mocca",
		moccachino: "Moccachino",
		latte: "Latte"
	};

	constructor(){
		var coffeeList = document.getElementById("coffeeList");
		for(var l in this.lists){
			coffeeList.innerText += l + "\n";
		}
	}

}
