var download = (function () {

	var init = function () {
		_setUpListneres();
	};


	// Устанавливаем прослушку
	
	var _setUpListneres = function () {
		$('.button_download').on('click', _sendCoords); // Отправляем координаты одной картинки относительно другой

	}	
	
	// Отправляем координаты
	var _sendCoords = function(e) {
		e.preventDefault();
		if (validation.checkfields()) {
			var watermark = $('.canvas__img'), 
				watermarkWrap = $('.canvas__img-wrapper'),
				image = $('.canvas__main-img'),
				cX = watermarkWrap.position().left,
				cY = watermarkWrap.position().top,
				tiling = changePlace.getTiling(),
				marginX = watermark.css('margin-right'),
				marginY = watermark.css('margin-bottom'),
				k = watermark.attr('data-koef'), // вытаскиваем коэффициент ресайза
				op = $( "#slider-opacity" ).slider( "value" ), // вытаскиваем прозрачность
				data = {'opacity': op, 'deltaX': cX, 'deltaY': cY, 'image': image.attr('data-path'),'watermark': watermark.attr('data-path'), 'koef': k, 'tiling': tiling, 'marginX': marginX, 'marginY': marginY }; // задаём дата для отправки на бэк

		// Отправляем ajax запрос с данными для получения пути к результату
		$.ajax({
            url: 'php/getimage.php',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function() {
            	location.href = '../php/download.php';
            }
        }).done( function() {
        }).fail( function(ans) {
        });
        }
	};



	return {
		init: init,
	};

})();

download.init();
 