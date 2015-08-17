//1
function Mediator() {
	var self = this;
	var curPmId = null;
	var images = [
	"photo/09_b.jpg"
	, "photo/b111007.jpg"
	, "photo/ff1ea55c51182c8280ad631eb080f535.jpg"
	, "photo/images (1).jpg"
	, "photo/images (2).jpg"
	];
	var objectInfo = {
		"disclamer": "Сквер памяти героев один из старейших скверов в Смоленске. В январе 1911 года, во время подготовки к празднованию 100-летнего юбилея победы над армией императора Наполеона, Смоленская городская Дума постановила: «Устроить бульвар возле крепостной стены… и назвать этот бульвар и сооружаемое здесь здание начального городского училища «Бульваром и начальным городским училищем в память 1812 года».."
	}
	self.sendTypesToMap = function (options) {
		map.filterPlacemarks(options.types);
	}
	self.requestObjectInfo = function (pmId) {		
		//TO DO
	}
	self.showObjectInfo = function (pmId) {
		menu.hideAll();
		var aside = document.getElementById('aside');
		var infoBlock = document.createElement('div');
		// infoBlock.className = 'objectInfo';
		var p = document.createElement('p');
		p.innerHTML = objectInfo.disclamer;
		aside.appendChild(infoBlock);
		infoBlock.appendChild(p);
		console.log('showObjectInfo');
	}
	self.requestImageSrc = function (pmId) {
		if (curPmId != pmId) {
			curPmId = pmId;
			console.log("requestImageSrc");
		}
		gallery.open(images);
	}
	map.mainCollection.events.add( 'click', function () {
		// self.showObjectInfo(curPmId);
		console.log("Placemark clicked");
	} );

}