//1
function Mediator() {
	var self = this;
	var curPmId = null;
	
	self.sendTypesToMap = function (options) {
		map.filterPlacemarks(options.types);
	}
	self.requestImageSrc = function (pmId) {
		var images = [
		"photo/09_b.jpg"
		, "photo/b111007.jpg"
		, "photo/ff1ea55c51182c8280ad631eb080f535.jpg"
		, "photo/images (1).jpg"
		, "photo/images (2).jpg"
		];
		if (curPmId != pmId) {
			curPmId = pmId;
			console.log("requestImageSrc");
		}
		gallery.open(images);
	}
}