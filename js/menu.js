//3

function MenuCategory(elem, list) {
	var self = this;
	var isOpened = false;

	self.toggle = function (e) {
		isOpened ? self.hide() : show();
	}
	self.hide = function (into) {
		var pos = into == "left" ? -175 : 200;
		console.log("category.hide()", isOpened);
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
	self.isOpen = function () {
		return isOpened;
	}
	function show() {
		console.log("category.show()", isOpened);
		isOpened = true;
		list.css("display", "block");
		list.animate({
			left: 25
		}, {
			duration: "default"
		});
	}
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
		console.log("actions.hide()", isOpened);
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
		console.log("actions.show()", isOpened);
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
		console.log("about.hide()", isOpened);
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
		console.log("about.show()", isOpened);
		isOpened = true;
		elem.css("display", "block");
		elem.animate({
			left: 0
		}, {
			duration: "slow"
		});
	}	
}
function MenuSearch(elem) {
	var self = this;
	var isOpened = false;

	self.toggle = function (e) {
		isOpened ? self.hide() : show();
	}
	self.hide = function (into) {
		var pos = into == "left" ? -200 : 200;
		console.log("search.hide()", isOpened);
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
	function show() {
		console.log("category.show()", isOpened);
		isOpened = true;
		$(elem).css("display", "block");
		$(elem).animate({
			left: 0
		}, {
			duration: "default"
		});
	}	
}
function Menu(elem) {
	var category = new MenuCategory( $("#category"), $("#categoryList") );
	var actions = new MenuActions();
	var about = new MenuAbout( $('#aboutWindow') );
	var search = new MenuSearch( $("#searchFilter") );
	var lastOpened = null;
	var curOpened = null;

	elem.on('click', function(event) {
		event.preventDefault();
		curOpened = event.target.id;

		console.log(event.target.id, lastOpened);

		if (curOpened != lastOpened) {
			switch(lastOpened) {
			case "category":
				if (curOpened != "search") category.hide("left");
				else category.hide();
				break;
			case "actions":
				actions.hide();
				break;
			case "search":
				if (curOpened != "category") search.hide("left");
				else search.hide();
				break;
			case "about":
				about.hide();
				break;
			}
		lastOpened = event.target.id;
		}
		switch(event.target.id) {
		case "category":
			category.toggle();
			break;
		case "actions":
			actions.toggle();
			break;
		case "search":
			search.toggle();
			break;
		case "about":
			about.toggle();
			break;
		}
	});
}