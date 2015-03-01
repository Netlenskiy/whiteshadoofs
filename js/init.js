//2
var myMap, objects, objectsCopy;
function init() { // Отвечает за загрузку карты, геолокацию

	myMap = new ymaps.Map('wsMap', {
		center: [55.20, 37.20],
		zoom: 10
	});

	var myBalloonLayout = ymaps.templateLayoutFactory.createClass(
		'<div style="width:170px; margin: 10px; overflow:auto">' +
		'<figure>' +
        	'<img src="{{properties.imageAddress}}" ' +
        	' style="width:150px; height:150px;" ' +
        	' onclick="showGallery({{properties.coordinates}})"/>' +
        	'<figcaption>{{properties.disclamer}}</figcaption>' +
        '</figure>' +
        '</div>'
		);
	//ymaps.layout.storage.add('my#Layout', myBalloonLayout); - Why it does not work?

	for (var i=0; i<myPMarks.length; i++) {
		myMap.geoObjects.add(
			new ymaps.Placemark( myPMarks[i], {
				imageAddress: mySrcStrings[i],
				coordinates: myPMarks[i],
				disclamer: myDisclamers[i],
				category: pmarksType[i],
			}, {
				balloonContentLayout: myBalloonLayout,//'my#Layout' - Why it does not work?
				iconLayout: "default#image",
				iconImageHref: "icons/" + icons[i]
			} ) )
	}
	objects = ymaps.geoQuery(myMap.geoObjects);
	objectsCopy = ymaps.geoQuery(myMap.geoObjects);
}