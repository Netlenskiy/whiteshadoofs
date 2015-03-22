//1
function Mediator() {
	var self = this;
	
	self.sendTypesToMap = function (options) {
		console.log(map);
		map.filterPlacemarks(options.types);

	}
	self.requestImageSrc = function () {
		console.log("requestImageSrc");
		var images = [
		"photo/09_b.jpg"
		, "photo/b111007.jpg"
		, "photo/ff1ea55c51182c8280ad631eb080f535.jpg"
		, "photo/images (1).jpg"
		, "photo/images (2).jpg"
		];
		gallery.open(images);
	}
}