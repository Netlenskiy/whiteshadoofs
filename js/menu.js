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
console.log("Menu.open");
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

	self.open = function (e) {
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
console.log("Filter.open");
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
console.log("1 Navigation.open");
console.log("1 isOpen = " + isOpen);
		if (!isOpen) {
console.log("! isOpen");
			menu[id].open();
			isOpen = true;
			lastOpened = id;
		} else if (id == lastOpened) {
console.log("else if");
				menu[id].open();
				isOpen = false;
				lastOpened = "";
			} else {
console.log("else");
				menu[lastOpened].open();
				menu[id].open();
				lastOpened = id;	
			}
console.log("2 Navigation.open");
console.log("2 isOpen = " + isOpen);
	}
	function onclckHandler(e) {
		var event = e || window.event;
		var target = event.target;
		// console.log("elem = " + elem);//HERE TO DO
		// menu[target.id].open();
		self.open(target.id);
	}

	elem.addEventListener("click", onclckHandler, true);
};
/* меню навигации слушает клики, по клику вызывает метот подменю с соотв. атрибутом, или закрывает, 
если уже открыто.
Запоминает открытие и атрибут открытого подменю. 
По клику по другому закрывает открытое, открывает новое с соотв. атрибутом