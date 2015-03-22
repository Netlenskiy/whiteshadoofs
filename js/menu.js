//3

<<<<<<< HEAD
=======
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
>>>>>>> acf63317a6d92c061115541584f18a79ac5eb3a3
function MenuCategory(elem) {
	var self = this;
	var isOpened = false;
// методы
	self.open = function () {
		elem.find("li").removeClass("noneMenu");
		elem.find("li").addClass("blockMenu");
		isOpened = !isOpened;
	}
	self.close = function () {
		elem.find("li").removeClass("blockMenu");
		elem.find("li").addClass("noneMenu");
		isOpened = !isOpened;
	}
// события
	elem.on("click", function (e) {
		if (e.target.id != "categories") return;
		isOpened ? self.close() : self.open();
	});
	elem.on("mouseover", function (e) {
		e.target.style.backgroundColor = "orange";
	});
	elem.on("mouseout", function (e) {
		e.target.style.backgroundColor = "#D33A42";
	});
	elem.last().on("click", function (e) {
		if (e.target.id != "filter") return;
		var types = [];
		elem.find("input").each(function (index, element) {
			if (element.checked)
			 	types.push(index);
		});
		isOpened ? self.close() : self.open();
		mediator.sendTypesToMap({
			type: "filter",
			types: types
		});
	});

};

