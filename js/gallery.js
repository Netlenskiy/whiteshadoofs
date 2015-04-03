//6

function Gallery(gallery) {
	var imgWidth = 200;
	var posLeft = 5;
	var gap = 5;
	var self = this;
	var isOpened = false;
	var section = $("#section");
	var carousel = $("#carousel");
	var carouselWidth = parseInt( $("#carousel").css("width"), 10 );
	$.fx.speeds["very_slow"] = 1000;
	
	$(".canselButton", gallery).on("click", function () {
		hideGallery();
	});
	$(".scrollButton", gallery).on('click', function(event) {
		event.preventDefault();
		scrollImages( $("img", carousel), $(event.target).attr("id") );
	});
	gallery.toggleClass( "openGallery" );
	
	self.open = function (images) {
		if (isOpened) {
			$("#img", carousel).remove();
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
			imgs.push( $( "<img/>", {
					src: images[i]
				} ).css({
					left: posLeft,
					outline: "1px solid grey"
				})
				.attr("pos", posLeft)
			);
			posLeft += (imgWidth + gap);
			carousel.append( imgs[i] );
		};
	}
	function scrollWindow(into) {
		var html = document.documentElement;
		var body = document.body;
		var elem = html.scrollTop ? html : body; 
		var scrollHeight = into - document.documentElement.clientHeight;
		$(document.body).animate({
			scrollTop: scrollHeight
		}, {
			duration: "very_slow"
		});
	}
	function show() {
		section.append( gallery );
		scrollWindow(780);
		gallery.animate({
			height: 230,
			top: 370
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
			complete: function () {
				$("img", carousel).remove();
			} 
		});
	}
	function scrollImages(images, into) {
		var firstPos = parseInt( $( images[0] ).attr("pos"), 10 );
		var lastPos = parseInt( $( images[images.length-1] ).attr("pos"), 10 );
		var shift = imgWidth + gap;
		if (into == "left")
		{
			if (lastPos <= carouselWidth - imgWidth) return;
			shift = -shift;
		}
		else
		{
			if (firstPos >= gap) return;
		}
		images.each(function(index, el) {
			var e = $(el);
			var newPos = shift + parseInt( e.attr("pos"), 10 );
			e.animate({
				left: newPos
			}, {
				duration: "slow"
			});
			e.attr("pos", newPos);
		});
	}
}
