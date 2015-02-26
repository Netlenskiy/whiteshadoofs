
var myPMarks = [[55.10, 37.10], [55.30, 37.30], [55.10, 37.30], [55.30, 37.10], [55.20, 37.20]];
var mySrcStrings = [
		"face/Smolensk_skver_pamyati_geroyev.jpg"
		, "face/DSC_0014.jpg"
		, "face/96_big.jpg"
		, "face/1424204291_3.jpg"
		, "face/image31207551.jpg"
];
var myDisclamers = [
		"Sed pretium euismod erat ut congue. Maecenas ac maximus enim, ac bibendum turpis. Aliquam erat volutpat."
		, "Donec a sagittis justo. Proin faucibus pulvinar nisl, vel sagittis turpis consectetur eget. Duis porttitor rutrum gravida."
		,"Nam commodo luctus erat, sed scelerisque turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
		, "Proin placerat felis tristique, cursus purus a, faucibus leo. Proin suscipit orci dapibus convallis blandit."
		, "Quisque a volutpat metus. Aliquam malesuada arcu enim, nec pretium nunc commodo eu. Curabitur eleifend ipsum at risus porttitor, in sollicitudin felis aliquam."
];
var pmarksType = [
		0, 0, 1, 1, 0
];
var icons = [
	"RedStarPic.gif"
	, "RedStarPic.gif"
	, "fire.jpg"
	, "RedStarPic.gif"
	, "RedStarPic.gif"
];
var myMap;
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
}

ymaps.ready(init);

function showGallery(coordinates) {
	// загружаем фотки, метка идентифицируется по координатам однозначно
	//считаем количество фоток, вычисляем размер блока
	// создаем элементы в DOM
	// обеспечиваем анимацию в случае необходимости
	// по клику на балун запращивается адрес папки с фотками для данной метки
	// и адреса фоток загружаются в массив
	var images = [ 
		"photo/0a2f78ff51bb.jpg"
		, "photo/2jf.jpg"
		, "photo/1361207948_pingvin.jpg"
		, "photo/pingvinyi.jpg"
		, "photo/Spheniscidae_2.jpg"
		];

	if ( !document.getElementById("gallery") ) {
		var aside = document.getElementById("aside");
		var section = document.getElementById("section");
		var gallery = document.createElement("div");
		gallery.setAttribute("id", "gallery");
		gallery.style.width = "800px";
		gallery.style.height = "0px";
		gallery.style.borderTop = "3px solid #4F81D3";
		gallery.style.overflow = "auto";
		
		var imgs = [];
		for (var i=0; i<images.length; i++) {
			imgs.push( document.createElement("img") );
			imgs[i].style.width = "220px";
			imgs[i].style.height = "220px";
			imgs[i].style.float = "left";
			imgs[i].style.margin = "15px";
			imgs[i].style.outline = "1px solid grey";
			imgs[i].setAttribute( "src", images[i] );
			gallery.appendChild( imgs[i] );
		}
		gallery.style.background = "white";
		gallery.style.borderRight = "3px solid #4F81D3";
		section.appendChild(gallery);
		var opts = {
			delay: 50,
			duration: 1000,
			step: function () {
				var h = document.documentElement.clientHeight;
				console.log("h = " + h);
				var needScroll = 1050 - h - document.body.scrollTop;
				console.log("scrollTop = " + document.body.scrollTop);
				console.log("needScroll = " + needScroll);
				document.body.scrollTop += 5;
			}
		};
		var timer = setInterval( function() {
			var hgth = document.body.scrollTop;
			var ns = 1050 - document.documentElement.clientHeight - hgth;
			console.log("clientHeight = " + document.documentElement.clientHeight);
			console.log("hgth = " + hgth);
			console.log("ns = " + ns);
			if (hgth < ns)
				opts.step();
			else clearInterval(timer);
		}, opts.delay );
	}

	function animate(opts) {	
		var h = 250;
		var start = new Date();
		var timer = setInterval( function () {
			var progress = (new Date() - start)/opts.duration;
			if (progress < 1)
				opts.step(progress, h);
			else
				clearInterval(timer);
		}, opts.delay );
	}
	var opts = {
		delay: 20,
		duration: 500,
		step: function(progress, h) {
			gallery.style.height = h * progress + "px";
			aside.style.height = 600 + h * progress + "px";
			gallery.scrollIntoView(false);	
		}
	}
	animate(opts);
}

// function MenuItem(elem, fields) {
// 	var el = elem;
// 	var itemFields = fields;

// 	this.show = function() {

// 	}
// 	el.onmouseover = funct
// }
var divs = ["Памятник", "Вечный огонь", "Обелиск", "Мемориал", "Братская могила", "", "", "", "", ""];
var isOpen = false;
function showMenu(e) {
	console.log(myMap.geoObjects);
	var elems = document.getElementById("items").firstElementChild.getElementsByTagName("li");
	if (!isOpen) {
		isOpen = true;
		for (var i=0; i<elems.length; i++) {
			elems[i].style.display = "block";
		}
	} else {
		isOpen = false;
		for (var i=0; i<elems.length; i++) {
			elems[i].style.display = "none";
		}
	}
	var notSelectedObjects = ymaps.geoQuery(myMap.geoObjects);
	notSelectedObjects.each( function(pm) {
		if (pm.properties._data.category == 0)
			myMap.geoObjects.remove(pm);
		console.log(pm.properties._data.category);
	} );
}
function hideMenu(id) {
	var elem = document.getElementById(id);
	for (var i = 0; i < 9; i++) {
		elem.removeChild(elem.firstElementChild);
	}
}


var items = document.getElementById("items");
items.addEventListener("click", showMenu, true);