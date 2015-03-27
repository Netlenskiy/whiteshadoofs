//6
	// загружаем фотки, метка идентифицируется по координатам
	//считаем количество фоток, вычисляем размер блока
	// создаем элементы в DOM
	// обеспечиваем анимацию в случае необходимости
	// по клику на балун запращивается адрес папки с фотками для данной метки
	// и адреса фоток загружаются в массив

function Gallery() {
	var self = this;
	var isOpened = false;
	var section = $("#section");

	var canselButton = $( document.createElement("div") )
	.addClass('canselButton')
	.on("click", function () {
		hideGallery();
	});

	var wrapper = $( document.createElement("div") )
	.append( canselButton )
	.css({
		position: "relative"
	});

	var gallery = $( document.createElement("div") )
	.attr( "id", "gallery" )
	.toggleClass( "openGallery" )
	.append( wrapper );


	self.open = function (images) {
		if (isOpened) {
			$("#gallery>img").remove();
			appendImage(images);
		} else {
			appendImage(images);
			animate();
			isOpened = !isOpened;
		}
	}

	function appendImage(images) {
		var imgs = [];
		for (var i=0; i<images.length; i++) {
			imgs.push( $( document.createElement("img") )
				.attr({
					src: images[i],
					width: 200,
					height: 200
				})
				.css({
					margin: 5,
					border: "1px solid grey"
				})
			);
			gallery.append( imgs[i] );
			console.log("append('img[i]')");
		};		
	}
	function windowScroll(into) {
		var html = document.documentElement;
		var body = document.body;
		var elem = html.scrollTop ? html : body; 
		var s_h = into - document.documentElement.clientHeight;
		$(document.body).animate({
			scrollTop: s_h
		}, {
			duration: 1000
		});
	}
	function animate() {
		section
		.append( gallery );
		windowScroll(780);
		gallery.animate({
			height: 250,
			top: 350
		}, {
			duration: 1000
		});
	}

	function hideGallery (options) {
		isOpened = !isOpened;
		gallery.animate({
			height: 0,
			top: 600
		}, {
			duration: 1000,
			queue: true
		});
		setTimeout(function () {
			$("#gallery>img").remove();
		}, 1000);
	}
}
