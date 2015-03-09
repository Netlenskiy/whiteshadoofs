//2
function initGeoObjectManager() { // Отвечает за загрузку карты, геолокацию
	var self = this;
	var myMap = new ymaps.Map('wsMap', {
		center: [55.20, 37.20],
		zoom: 10
	});
	var myBalloonLayout = ymaps.templateLayoutFactory.createClass(//переместить в локальную обл. вид-ти
		'<div style="width:170px; margin: 10px; overflow:auto">' +
		'<figure>' +
	    	'<img src="{{properties.imageAddress}}" ' +
	    	' style="width:150px; height:150px;" ' +
//запрашивается адрес картинок для метки либо по координатам либо по id
	    	' onclick="mediator.requestImageSrc({{properties.coordinates}})"/>' +
	    	'<figcaption>{{properties.disclamer}}</figcaption>' +
	    '</figure>' +
	    '</div>'
		);

	//ymaps.layout.storage.add('my#Layout', myBalloonLayout); - Why it does not work?
	
	var items = [];
	var mainCollection = new ymaps.GeoObjectCollection();
	var hiddenCollection = new ymaps.GeoObjectCollection();
	var tempCollection = new ymaps.GeoObjectCollection();

	for (var i=0; i<myPlaceMarks.length; i++) {
			mainCollection.add( new ymaps.Placemark( myPlaceMarks[i].coordnts, {
				id: myPlaceMarks[i].id,
				imageAddress: myPlaceMarks[i].srcString,
				coordinates: myPlaceMarks[i].coordnts,
				disclamer: myPlaceMarks[i].disclamer,
				category: myPlaceMarks[i].icontype,
			}, {
				balloonContentLayout: myBalloonLayout,//'my#Layout' - Why it does not work?
				iconLayout: "default#image",
				iconImageHref: "icons/" + myPlaceMarks[i].icon
			} ) )
	}
	mainCollection.each( function (item) {
		items.push(item);
	})
	myMap.geoObjects.add( mainCollection );

	objects = ymaps.geoQuery(myMap.geoObjects);
	objectsCopy = ymaps.geoQuery(myMap.geoObjects);

	window.map = {
		filterPlacemarks: function (types) {
			mainCollection.removeAll();
			for (var i = 0; i < items.length; i++) {
				for (var j = 0; j < types.length; j++) {
					if ( items[i].properties._data.category == types[j] )
						break;
				}
				if (j == types.length) mainCollection.add( items[i] );
			};
		}
	}
}
