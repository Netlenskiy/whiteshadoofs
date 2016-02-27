//1
function Mediator() {
	var self = this;
	var curPmId = null;

	self.sendTypesToMap = function (options) {
		map.filterPlacemarks(options.types);
	};
	self.requestObjectInfo = function (pmId) {		
		//TO DO
	};
	self.showObjectInfo = function (pmId) {
		menu.hideAll();

		var oldInfo = document.getElementById('info');
		if ( oldInfo != null ) {
			oldInfo.innerHTML = objectInfo.disclamer;
			return;
		}

		var aside = document.getElementById('aside');
		var infoBlock = document.createElement('div');
		infoBlock.className = 'objectInfo';

		var p = document.createElement('p');
		p.id = 'info';
		p.innerHTML = objectInfo.disclamer;
		aside.appendChild(infoBlock);
		infoBlock.appendChild(p);

		console.log('showObjectInfo');
	};
	self.requestImageSrc = function (pmId) {
		if (curPmId != pmId) {
			curPmId = pmId;
			console.log("requestImageSrc");
		}
		gallery.open(images);
	};
	map.mainCollection.events.add( 'click', function () {
		self.showObjectInfo(curPmId);
		console.log("Placemark clicked");
	} );

}