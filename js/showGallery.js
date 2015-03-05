//6
function showGallery(coordinates) {
	// загружаем фотки, метка идентифицируется по координатам
	//считаем количество фоток, вычисляем размер блока
	// создаем элементы в DOM
	// обеспечиваем анимацию в случае необходимости
	// по клику на балун запращивается адрес папки с фотками для данной метки
	// и адреса фоток загружаются в массив
	var images = [ 
		"photo/09_b.jpg"
		, "photo/b111007.jpg"
		, "photo/ff1ea55c51182c8280ad631eb080f535.jpg"
		, "photo/images (1).jpg"
		, "photo/images (2).jpg"
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
		gallery.style.position = "relative";
		
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
		var wrapper = document.createElement("div");
		var canselButton = document.createElement("div");
		canselButton.className = "canselButton";
		canselButton.addEventListener("click", function () {
			hideGallery(options);
		}, true);
		wrapper.appendChild( canselButton );
		wrapper.style.position = "relative";

		gallery.style.background = "white";
		gallery.style.borderRight = "3px solid #4F81D3";
		gallery.style.position = "relative";
		section.appendChild( wrapper );
		section.appendChild(gallery);
		var opts = {
			delay: 50,
			duration: 1000,
			step: function () {
				var h = document.documentElement.clientHeight;
				var needScroll = 1050 - h - document.body.scrollTop;
				document.body.scrollTop += 5;
			}
		};
		var timer = setInterval( function() {
			var hgth = document.body.scrollTop;
			var ns = 1050 - document.documentElement.clientHeight - hgth;
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
			gallery.style.height = h * progress + "px";
			aside.style.height = 600 + h * progress + "px";
			gallery.scrollIntoView(false);	
		}
	};
	animate(opts);
}
