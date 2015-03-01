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
var isOpen = false;
function Menu(arg) {
	var self = this;
	//self.isOpen = false;

	self.open = function () {
		var li = arg.children;
		//if (!self.isOpen) {
		if (!isOpen) {
			for (var i = 0; i < li.length; i++)
				li[i].className = "blockMenu";
		} else {
			for (var i = 0; i < li.length; i++)
				li[i].className = "noneMenu";
		}
		//self.isOpen = !self.isOpen;
		isOpen = !isOpen;
	}
	self.filter = function () {

	}

	arg.parentNode.onclick = function (e) {
		var event = e || window.event;
		var target = event.target;
		if (target == "[object HTMLLIElement]")
			self.open();
	}
};

function Filter(arg) {
	var self = this;
	//self.isOpen = false;

	self.open = function () {
		var li = arg.children;
		//if (!self.isOpen) {
		if (!isOpen) {
			for (var i = 0; i < li.length; i++)
				li[i].className = "blockMenu";
		} else {
			for (var i = 0; i < li.length; i++)
				li[i].className = "noneMenu";
		}
		//self.isOpen = !self.isOpen;
		isOpen = !isOpen;
	}

	arg.parentNode.onclick = function (e) {
		var event = e || window.event;
		var target = event.target;
		if (target == "[object HTMLLIElement]")
			if (target == arg.parentNode || target == arg.lastElementChild) {
				self.open();
				};
	}

};

function Navigation(elem, args) {
	var self = this;
	var menu = args;
	var isOpen = false;
	var lastOpened = "";

	self.open = function (id) {
		if (!self.isOpen) {
			menu[id].open();
			isOpen = true;
			lastOpened = id;
		} else if (id == lastOpened) {
				menu[id].open();
				isOpen = false;
				lastOpened = "";
			} else {
				menu[lastOpened].open();
				menu[id].open();
				lastOpened = id;	
			}
	}
	function onclckHandler(e) {
		var event = e || window.event;
		var target = event.target;
		var targetId = target.id;
		console.log(target.id =="categories");//HERE TO DO
	}

	elem.addEventListener("click", onclckHandler, false);
};