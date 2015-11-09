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
				image = $('.canvas__main-img'),
				cX = watermark.position().left,
				cY = watermark.position().top,
				k = watermark.attr('data-koef'), // вытаскиваем коэффициент ресайза
				op = $( "#slider-opacity" ).slider( "value" ), // вытаскиваем прозрачность
				data = {'opacity': op, 'deltaX': cX, 'deltaY': cY, 'image': image.attr('data-path'),'watermark': watermark.attr('data-path'), 'koef': k }; // задаём дата для отправки на бэк
		

		// Отправляем ajax запрос с данными для получения пути к результату
		$.ajax({
            url: 'php/getimage.php',
            type: 'POST',
            dataType: 'json',
            data: data,
        }).done( function() {
        	
        }).fail( function(ans) {
            console.log('Проблемы в PHP');
        });
        window.open('../img/result.jpg');
        }
	};



	return {
		init: init,
	};

})();

download.init();
 