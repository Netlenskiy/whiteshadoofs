//3
/*
Класс "Menu" включает 4 подкласса, каждый из которых
является одним из подменю на странице.
Конструктору "Menu" передается DOM-элемент, обернутый в jquery (далее 
DOM-jquery-элемент), в котором содержится меню.

*/
function MenuCategory(list) {
	/*
	Меню "Категории". Аргумент - DOM-jquery-элемент, содержащий список 
	категорий объекта с чекбоксами для того, чтобы отфильтровывать объекты на карте.

	*/
	var self = this;
	var isOpened = false;
	var posInLeft = -175;
	var posInRight = 200;

	self.toggle = function (e) {
		isOpened ? self.hide() : show();
	}

	self.hide = function (into) {
		/*
		into- направление смещения списка при закрытии или замещении
		его другим элементом в боковой панели. При завершении смещения
		список делается невидимым и возвращается в исходную позицию,
		слева от боковой панели.
		Вызов без аргумента - смещение вправо.

		pos - позиция элемента, в которую он будет смещен при нажатии 
		меню, либо кнопки под списком.

		*/
		var pos = into == "left" ? posInLeft : posInRight;
		isOpened = false;
		list.animate({
			left: pos
		}, {
			duration: "default",
			complete: function () {
				list.css({
					"display": "none",
					"left": posInLeft
				});
			}
		});
	}

	self.isOpen = function () {
		return isOpened;
	}

	function show() {
		/*
		Отображает список в боковой панели.
		*/
		isOpened = true;
		list.css("display", "block");
		list.animate({
			left: 25
		}, {
			duration: "default"
		});
	}

	list.last().on("click", function (e) {
		/*
		Обработчик нажатия на кнопку под списком. При нажатии
		callback-функция формирует массив, в котором названия
		категорий выбранных чекбоксов. Массив передается методу
		класса Mediator, который передает из объекту карты.
		*/
		if (e.target.id != "filter") return;
		var types = [];
		list.find("input").each(function (index, element) {
			if (element.checked)
			 	types.push(index);
		});
		mediator.sendTypesToMap({
			type: "filter",
			types: types
		});
	});
}

function MenuActions() {
	/*
	
	*/
	var self = this;
	var isOpened = false;
	var elem_1 = $('#actionsWindow_1');
	var elem_2 = $('#actionsWindow_2');
	var elem_3 = $('#actionsWindow_3');
	var elem_4 = $('#actionsWindow_4');
	var elem = elem_1;
	self.authorized = false;

	self.toggle = function () {
		isOpened ? self.hide() : show();
	}

	self.isOpen = function () {
		return isOpened;
	}

	self.hide = function () {
		isOpened = false;
		$(self.authorized).change();
		elem.animate({
			left: 1000
		}, {
			duration: "default",
			complete: function () {
				elem.css("display", "none");
			}
		});
	}

	self.toggleAuth = function (flag) {
		function toggle(newElem) {
			elem.animate({
				opacity: 0
			}, {
				duration: "default",
				complete: function () {
					elem.css("display", "none");
					elem = newElem;
					elem.css("display", "block");
					elem.animate({
						opacity: 1
					}, {
						duration: "default"
					});
				}
			});
		}
		if (flag) {
			toggle(elem_2);
		} else {
			toggle(elem_1);
		};
	}
	function show () {
		isOpened = true;
		elem.css("display", "block");
		elem.animate({
			left: 0
		}, {
			duration: "slow"
		});
		//setTimeout(self.toggleAuth(true), 5000);
	}
}

function MenuAbout(elem) {
	var self = this;
	var isOpened = false;

	self.toggle = function () {
		isOpened ? self.hide() : show();
	}
	self.isOpen = function () {
		return isOpened;
	}	
	self.hide = function () {
		isOpened = false;
		elem.animate({
			left: 1000
		}, {
			duration: "default",
			complete: function () {
				elem.css("display", "none");
			}
		});
	}
	function show () {
		isOpened = true;
		elem.css("display", "block");
		elem.animate({
			left: 0
		}, {
			duration: "slow"
		});
	}	
}

function MenuSearch(search, searchResultElem) {
	/*	
	Меню "Поиск". Аргументы: 
	search - блок с формой поиска,
	searchResultElem - блок с результатами поиска.

	openedItem - отображаемый в данный момент блок.

	*/
	var self = this;
	var isOpened = false;
	var openedItem = "search";
	var posInRight = 200;

	self.toggle = function () {
		/*
		
		*/
		if (isOpened) {
			openedItem === "searchResultElem" ? self.hide(null, "searchResultElem") : self.hide();
		} else {
			show();
		};
	}

	self.hide = function (into) {
		/*
		
		*/
		var pos = into == "left" ? -posInRight : posInRight;
		var elem = openedItem === "searchResultElem" ? searchResultElem : search;
		isOpened = false;

		elem.animate({
			left: pos
		}, {
			duration: "default",
			complete: function () {
				elem.css({
					"display": "none",
					"left": -posInRight
				});
			}
		});
	}

	self.isOpen = function () {
		return isOpened;
	}

	function show(item) {
		/*
		
		*/
		isOpened = true;
		var elem = item === "searchResultElem" ? searchResultElem : search;
		openedItem = item === "searchResultElem" ? "searchResultElem" : "search";

		elem.css("display", "block");		
		elem.animate({
			left: 0
		}, {
			duration: "default"
		});
	}

	function jxRequestSearchResult (url, elem) {
		/*Отправляет ajax-запрос форму с параметрами поиска.
		При получении результата встраивает его в элемент 
		div блока результата поиска.*/
		if (url === 'undefined' || elem === 'undefined')
			throw new Error('2 arguments expected.');

		var xhr = new XMLHttpRequest();
		
		xhr.open('GET', url);
		xhr.send();

		xhr.onreadystatechange = function () {
			// Обработка ответа сервера
			if (xhr.readyState != 4) return;
			
			if (xhr.status == 200)
				$('#sr_block', elem).html(this.responseText);
			else 
				$('body').html(this.responseText);
		}
	}

	$("input[name=to_search]", search).on('click', function (event) {
		/*	
		При клике прячется форма поиска и отображается блок с результатами
		поиска, далее обход формы и формирование строки GET-запроса.
		
		*/
		event.preventDefault();
		self.hide();
		show("searchResultElem");

		var form = document.forms.search_form;
		var url = 'index.php/site/search?';

		for (var i=0; i<form.elements.length; i++) {
			var item = form.elements[i];
			if (i != 0 && item.type != 'submit') url += '&';

			if (item.type == 'checkbox' || item.type == 'text') {
				url += (item.name + '=');
				if (item.type == 'checkbox')
					url += item.checked;
				else if (item.type == 'text')
					url += encodeURIComponent(item.value);
			}
		}
		jxRequestSearchResult(url, $('#search_result'));
	});

	$("input[name=new_search]", searchResultElem).on('click', function (event) {
		event.preventDefault();
		self.hide("right", "searchResultElem");
		show();
	});
}

function Menu(elem) {
	//
	var menu = {
		category: new MenuCategory( $("#category_list") ),
		actions:  new MenuActions(),
		about:    new MenuAbout( $('#about_window') ),
		search:   new MenuSearch( $("#search_filter"), $("#search_result") )
	}
	var lastOpened = null;
	var curOpened = null;
	var authorized = false;

	function hideAll (argument) {
		if (lastOpened) menu[lastOpened].hide();
	}

	elem.on('click', function(event) {
		event.preventDefault();
		curOpened = event.target.id;
		if (curOpened != lastOpened) {
			switch(lastOpened) {
			case "category":
				if (curOpened != "search") menu.category.hide("left");
				else menu.category.hide();
				break;
			case "actions":
				menu.actions.hide();
				break;
			case "search":
				if (curOpened != "category") menu.search.hide("left");
				else menu.search.hide();
				break;
			case "about":
				menu.about.hide();
				break;
			}
			lastOpened = event.target.id;
		}
		menu[curOpened].toggle();
	});

	this.hideAll = hideAll;
}