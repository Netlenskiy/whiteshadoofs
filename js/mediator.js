//1
function Mediator() {
	var self = this;
	
	self.sendTypesToMap = function (options) {
		console.log(map);
		map.filterPlacemarks(options.types);

	}
	self.requestImageSrc = function () {
		console.log("requestImageSrc");
	}
}