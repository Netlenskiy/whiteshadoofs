
function Menu(arg, flag) {
	var self = this;
	self.isOpen = false;

	self.open = function () {
		var li = arg.children;
		console.log(li);
		if (!self.isOpen) {
			for (var i = 0; i < li.length; i++) {
				li[i].className = "blockMenu";
			};
		} else {
			for (var i = 0; i < li.length; i++) {
				li[i].className = "noneMenu";
			};
		}
		self.isOpen = !self.isOpen;
	}

	arg.parentNode.onclick = function (e) {
		var event = e || window.event;
		var target = event.target;
		if (target == "[object HTMLLIElement]")
			if (!flag) {
				if (target.children.length || target == arg.lastElementChild) {
					self.open();
				};
			} else self.open();
	}
}