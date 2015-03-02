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

	self.close = function (e) {
		var li = arg.children;
		for (var i = 0; i < li.length; i++)
			li[i].className = "noneMenu";
		isOpen = !isOpen;
console.log("Filter.close");
	}

	arg.lastElementChild.onclick = function (e) {
	console.log("arg.lastElementChild");
		var event = e || window.event;
		var target = event.target;
		if (target == "[object HTMLLIElement]")
			if (target == arg.lastElementChild) {
				self.close();
			};
	}

};

function Navigation(elem, args) {
	var self = this;
	var menu = args;
	var isOpen = false;
	var lastOpened = "";

	self.showHide = function (arr, clssName) {
		for (var i = 0; i < arr.length; i++)
				arr[i].className = clssName;
	}
	self.open = function (target) {
		var li = target.getElementsByTagName("li");
		console.log(lastOpened);
		if (!isOpen) {
			console.log("!isOpen");
			self.showHide(li, "blockMenu");
			isOpen = !isOpen;
		} else  if (target == lastOpened) {
			console.log("else  if");
			self.showHide(li, "noneMenu");
			isOpen = !isOpen;
		} else if (target.id == "filter"){
			console.log("delegation is not needed here");
			self.showHide( lastOpened.getElementsByTagName("li"), "noneMenu" );
			isOpen = !isOpen;
		} else {
			self.showHide( lastOpened.getElementsByTagName("li"), "noneMenu" );
			self.showHide( li, "blockMenu");
			lastOpened = target;
		}
	}

	function onclckHandler(e) {
		var event = e || window.event;
		var target = event.target;
		if (target.id) {
			self.open(target);
			lastOpened = target;
		}
	}

	elem.addEventListener("click", onclckHandler, false);
};