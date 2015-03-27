//6
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
	.css({
		position: "relative"
	})
	.append( canselButton );
	var gallery = $( document.createElement("div") )
	.attr( "id", "gallery" )
	.toggleClass( "openGallery" )
	.append( wrapper );
	$.fx.speeds["very_slow"] = 1000;
	
	self.open = function (images) {
		if (isOpened) {
			$("#gallery>img").remove();
			appendImages(images);
		} else {
			appendImages(images);
			show();
			isOpened = !isOpened;
		}
	}

	function appendImages(images) {
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
			duration: "very_slow"
		});
	}
	function show() {
		section.append( gallery );
		windowScroll(780);
		gallery.animate({
			height: 250,
			top: 350
		}, {
			duration: "very_slow"
		});
	}
	function hideGallery (options) {
		isOpened = !isOpened;
		gallery.animate({
			height: 0,
			top: 600
		}, {
			duration: "very_slow",
			queue: true
		});
		setTimeout(function () {
			$("#gallery>img").remove();
		}, 1000);
	}
}
