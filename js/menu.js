//3

function MenuCategory(elem, list) {
	var self = this;
	var isOpened = false;
	self.toggle = function (e) {
		isOpened ? self.hide() : show();
	}
	self.hide = function (into) {
		var pos = into == "left" ? -175 : 200;
		isOpened = false;
		list.animate({
			left: pos
		}, {
			duration: "default",
			complete: function () {
				list.css({
					"display": "none",
					"left": -175
				});
			}
		});
	}
	self.isOpen = function () {
		return isOpened;
	}
	function show() {
		isOpened = true;
		list.css("display", "block");
		list.animate({
			left: 25
		}, {
			duration: "default"
		});
	}
	list.last().on("click", function (e) {
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
function MenuSearch(search, result) {
	var self = this;
	var isOpened = false;
	var openedItem = "search";
	self.toggle = function () {
		if (isOpened) {
			openedItem === "result" ? self.hide(null, "result") : self.hide();
		} else {
			show();
		};
	}
	self.hide = function (into) {
		var pos = into == "left" ? -200 : 200;
		var elem = openedItem === "result" ? $(result) : $(search);
		isOpened = false;
		elem.animate({
			left: pos
		}, {
			duration: "default",
			complete: function () {
				elem.css({
					"display": "none",
					"left": -200
				});
			}
		});
	}
	self.isOpen = function () {
		return isOpened;
	}
	function show(item) {
		isOpened = true;
		var elem = item === "result" ? $(result) : $(search);
		openedItem = item === "result" ? "result" : "search";
		elem.css("display", "block");
		elem.animate({
			left: 0
		}, {
			duration: "default"
		});
	}
	$("input[name=toSearch]", search).on('click', function (event) {
		event.preventDefault();
		self.hide();
		show("result");
	});
	$("input[name=newSearch]", result).on('click', function (event) {
		event.preventDefault();
		self.hide("right", "result");
		show();
	});
}
function Menu(elem) {
	var menu = {
		category: new MenuCategory( $("#category"), $("#categoryList") ),
		actions: new MenuActions(),
		about: new MenuAbout( $('#aboutWindow') ),
		search: new MenuSearch( $("#searchFilter"), $("#searchResult") )
	}
	var lastOpened = null;
	var curOpened = null;

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
}