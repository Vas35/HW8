 // Задача №1: Написать функцию, которая будет выводить состав коктейля виде HTML. Done!
  var  compositionMojito = {
	"Белый ром" : 60,
    "Сок лайма" : 45,
    "Коричневый сахар" : 20,
    "Мята" : 20,
    "Содовая" : 100
};
function createMojito(compositionMojito){
    
  var mojito = "<div class = \"" + "mojito" + "\">" ;
  for (var name in compositionMojito){
	  mojito += "\n\t<p>" +" "+ name + " - " + compositionMojito[name] + "гр" + ";" + "</p>";
  }
  mojito += "\n</div>";
	return mojito;
}
console.log(createMojito(compositionMojito));


// Задача №2: Написать каскадное меню(двухуровневое). Не понятное условие! Нужен пример практического применения. None!
var menu = {
	"home" : "Home",
	"about" : "About Us"
	};
function createMenu (menuData, ulClass,liClass,subUlClass, subLiClass) {
	var menuList = "<ul class=\""+ulClass+"\">";
	 for (var fileName in menuData) {
		 menuList += "\n\t<li class = \"" + liClass +"\"" + ">" + fileName +  "</li>";
		 }
	 for (var subFileName in fileName){
	         menuList += "\n\t\t<li class = \"" + subLiClass +"\"" + ">"+ menu[fileName] + "</li>";
	 }
	menuList += "\n</ul>";
	return menuList;
}


console.log(createMenu(menu,"menu","menu__item","submenu", "submenu__item"));


// Возможно вытягивать информацию с массива снизу верх?
/*function menu (choice) {
	var   menuMcdonalds = {
	     "drinks" : {
		            "coca-cola" : 1,
                     "sprite"	: 2
	                },
         "food"	: {
		             "sandwich" : 2,
		               "burger" : 1
		}},
		menuClient ={
			"1" : "happyMeal",
			"2" : "childDream"
		
menuOrder = "drinks :"
+ "\n" 
+ "food :" +
return menuOrder;
}
console.log(menu("happyMeal"));*/


// Задача №3: Написать функцию по кредитному калькулятору. Нужно уточнить какого вида должен быть калькулятор. Done!
function getCredit (num1,num2,num3){
        var creditPayment = 0;
	        creditPayment = Math.round(num1 * num2 / num3);
	return creditPayment;
}
console.log("Месячная плата по кредиту:",getCredit(10000,0.1,12) + " грн");
