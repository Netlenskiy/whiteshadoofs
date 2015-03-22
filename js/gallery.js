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
	var aside = $( "#aside");
	var section = $("#section");
	var gallery = $( document.createElement("div") );
	var opts = {
		delay: 50,
		duration: 1000,
		step: function () {
			var h = document.documentElement.clientHeight;
			var needScroll = 1050 - h - document.body.scrollTop;
			document.body.scrollTop += 5;
		}
	};
	var options= {
		delay: 20,
		duration: 100,
		count: 0,
		step: function() {
			//gallery.style.height = h * progress + "px";
			aside.style.height = 850 - (this.count += 50) + "px";
			console.log(" aside.style.height = " + aside.style.height);
		}
	};

	gallery.attr( "id", "gallery" );
	gallery.toggleClass( "openGallery" );

	self.open = function (images) {
		console.log("gallery.open()", " isOpened = ", isOpened);
		var imgs = [];
		if (!isOpened) {
			for (var i=0; i<images.length; i++) {
				imgs.push( $( document.createElement("img") ) );
				imgs[i].attr( "src", images[i] );
				gallery.append( imgs[i] );
				console.log("image added");
			}
			var wrapper = $( document.createElement("div") );
			var canselButton = $( document.createElement("div") );
			canselButton.addClass('canselButton');
			canselButton.on("click", function () {
				hideGallery(options);
			});
			wrapper.append( canselButton );
			wrapper.css( "position", "relative" );
			section.append( wrapper );
			section.append( gallery );
			var timer = setInterval( function() {
				var hgth = document.body.scrollTop;
				var ns = 1050 - document.documentElement.clientHeight - hgth;
				console.log("timer ", hgth);
				if (hgth < ns)
					opts.step();
				else clearInterval(timer);
			}, opts.delay );
		}
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
	function hideGallery (options) {	
			var h = 250;
			var start = new Date();
			var timer = setInterval( function () {
				var progress = (new Date() - start)/options.duration;
				options.step();
				if (progress > 1) 
					clearInterval(timer);
			}, options.delay );
			section.removeChild( wrapper );
			section.removeChild( gallery );
	}
	var opts = {
		delay: 20,
		duration: 500,
		step: function(progress, h) {
			gallery.css( "height", h * progress + "px" );
			aside.css( "height", 600 + h * progress + "px" );
			// gallery.scrollIntoView(false);	
		}
	};
	//animate(opts);
}
