//2
var myMap, objects, objectsCopy;
function init() { // Отвечает за загрузку карты, геолокацию

	myMap = new ymaps.Map('wsMap', {
		center: [55.20, 37.20],
		zoom: 10
	});
	var myBalloonLayout = ymaps.templateLayoutFactory.createClass(//переместить в локальную обл. вид-ти
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

	function Navigation(elem, args) {
		var self = this;
		var menu = args;
		var isOpen = false;
		var lastOpened = "";

		self.filterPlcmarks = function (target) {// ПЕРЕДЕЛАТЬ С ИСПОЛЬЗОВАНИЕМ ObjectManager
			var temp = target.parentNode.getElementsByTagName("input");
			var checked = [];
			for (var i = 0; i < temp.length; i++) {
				if ( temp[i].checked ) {
					checked.push(i);
				}
			};
			mainCollection.removeAll();
			for (var i = 0; i < items.length; i++) {
				for (var j = 0; j < checked.length; j++) {
					if ( items[i].properties._data.category == checked[j] )
						break;
				}
				if (j == checked.length) mainCollection.add( items[i] );
			};
		}
		////////////////////////////////////////////////////////////////////
		self.showHide = function (arr, clssName) {
			for (var i = 0; i < arr.length; i++)
					arr[i].className = clssName;
		}
		self.open = function (target) {
			var li = target.getElementsByTagName("li");
			if (!isOpen) {
				self.showHide(li, "blockMenu");
				isOpen = !isOpen;
			} else  if (target == lastOpened) {
				self.showHide(li, "noneMenu");
				isOpen = !isOpen;
			} else if (target.id == "filter"){
				self.showHide( lastOpened.getElementsByTagName("li"), "noneMenu" );
				self.filterPlcmarks(target);
				isOpen = !isOpen;
			} else {
				self.showHide( lastOpened.getElementsByTagName("li"), "noneMenu" );
				self.showHide( li, "blockMenu");
				lastOpened = target;
			}
		}

		function onclckHandler(e) {
			var event = e || window.event;
			var target = event.target;
			if (target.id) {
				self.open(target);
				lastOpened = target;
			}
		}

		elem.addEventListener("click", onclckHandler, false);
	};


	var menuItems = {
		categories:  new Filter( document.getElementById("mainMenu").getElementsByTagName("ul")[0] )
		, actions:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[1] )
		, about:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[2] )
		, search:  new Menu( document.getElementById("mainMenu").getElementsByTagName("ul")[3] )
	};
	var nav = new Navigation(mainMenu, menuItems);
}