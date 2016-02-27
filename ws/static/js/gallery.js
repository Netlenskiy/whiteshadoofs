//6
/*
Функция-конструктор принимает 1 аргумент - DOM-элемент, в котором
передается html-контейнер для галереи-карусели.

imgWidth - ширина элемента img в пикселях.

posLeft - смещение элемента img относительно левого края контейнера,
вычисляется для каждого элемента img и присваивается атрибуту 'pos', который
используется для вычисления текущего смещения элемента img в функции
scrollImages. (см. ниже)

gap - промежуток между элементами img.

isOpened - флаг, false - галерея скрыта, true - галерея показана.

carousel - контейнер для галереи-карусели.

carouselWidth - ширина carousel.


TO DO
Если при загрузке страницы не загрузилась карта, видны кнопки прокрутки
картинок и кнопка закрытия галереи на месте, где должна быть карта.
Пофиксить.
 */
function Gallery(gallery) {
	var imgWidth = 200;
	var posLeft = 5;
	var gap = 5;
	var self = this;
	var isOpened = false;
	// var section = $("#section");
	var carousel = $("#carousel");
	var carouselWidth = parseInt( carousel.css("width"), 10 );

	$.fx.speeds["very_slow"] = 1000;

	$("#canselButton", gallery).on("click", function () {
		hideGallery();
	});
	$(".scrollButton", gallery).on('click', function(event) {
		event.preventDefault();
		/*в качестве направления скроллинга в данном контексте передается
		атрибут id картинки, на которую кликнул пользователь*/
		scrollImages( $("img", carousel), $(event.target).attr("id") );
	});

	gallery.toggleClass( "openGallery" );
	
	self.open = function (images) {
		/*
		Добавляет в галерею-карусель изображения и показывает её.
		Если при вызове галерея-карусель уже открыта, заменяет изображения
		на новые.
		*/
		if (isOpened) {
			$("#img", carousel).remove();
			appendImages(images);
		} else {
			appendImages(images);
			show();
			isOpened = !isOpened;
		}
	};
	function appendImages(images) {
		/*
		Добавляет элементы img в контейнер галереи-карусели, которые формирует 
		из images, коллекцию картинок (images) передает в функцию mediator .
		
		imgs - коллекция элементов img, добавляется в контейнер carousel.
		Предполагается, что контейнер carousel существует на момент вызова.
		*/

		// var posLeft = 5;
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
		}
	}
	function scrollWindow(into) {
		/*
		При показе галереи прокручивает страницу так, чтобы нижняя
		граница галереи находилась на нижней границе окна браузера.

		html, body - тело документа. В разных браузерах разные элементы
		имеют свойство scrollTop, за счёт которого происходит прокрутка.
		НЕДОДЕЛАНО
		*/
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
		/*
		Показывает галерею-карусель
		*/
		// section.append( gallery );
		scrollWindow(780);
		gallery.animate({
			height: 230,
			top: 220
		}, {
			duration: "slow"
		});
	}
	function hideGallery () {
		/*
		Прячет галерею, после чего удаляет из нее присутствовавшие там
		картинки.
		*/
		isOpened = false;
		gallery.animate({
			height: 0,
			top: 450
		}, {
			duration: "slow",
			complete: function () {
				$("img", carousel).remove();
			} 
		});
	}
	function scrollImages(images, into) {
		/*
		Принимает коллекцию картинок и направление скроллинга
		и смещает каждую картинку из коллекции на величину shift
		
		firstPos, lastPos - хранят вычисленную позицию первой и последней 
		картинки соответственно

		shift - величина сдвига: ширина картинки + промежуток между картинками
		в качестве рамки для картинок используется outline вместо border,
		чтобы не учитывать ширину рамки
		*/

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
