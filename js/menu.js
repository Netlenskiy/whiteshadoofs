//3

/*Сделать интерфейс "меню", сделать два класса "меню" с фильтром и обычное,
реализующих интерфейс "меню" с полиморфным методом открытия-закрытия
убрать глобальную isOpen
*/
/*Есть объект "меню навигации". Он имеет хэш объектов "подменю".
Он знает, какой объект в данный момент открыт и может вызвать метод открытия любого
подменю. Он может отлавливать событие клика и определять таргет события. 
Он определяет таргет и вызывает метод объекта из хэша, соответствующего этому таргету.
У него есть приватная переменная isOpen. 
*/
function Menu(arg) {
	var self = this;
	//self.isOpen = false;
	self.filter = function () {

	}

	arg.parentNode.onclick = function (e) {
		var event = e || window.event;
		var target = event.target;
		if (target == "[object HTMLLIElement]" && !target.id)
			self.open();
	}
};

function Filter(arg) { // arg == ul
	var self = this;
	var isOpen = false;

	// self.close = function (e) {
	// 	var li = arg.children;
	// 	for (var i = 0; i < li.length; i++)
	// 		li[i].className = "noneMenu";
	// 	isOpen = !isOpen;

};
