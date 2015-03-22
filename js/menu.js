//3

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

