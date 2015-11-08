var download = (function () {

	var init = function () {
		_setUpListneres();
	};


	// Устанавливаем прослушку
	
	var _setUpListneres = function () {
		$('.button_download').on('click', _sendCoords); // Отправляем координаты одной картинки относительно другой

	}	
	
	// Меняем прозрачность
	var _sendCoords = function(e) {
		e.preventDefault();
			var watermark = $('.canvas__img'),
				image = $('.canvas__main-img'),
				cX = watermark.position().left,
				cY = watermark.position().top,
				op = $( "#slider-opacity" ).slider( "value" ) / 100,
				data = {'opacity': op, 'deltaX': cX, 'deltaY': cY, 'image': image.attr('data-path'),'watermark': watermark.attr('data-path') };
		
		console.log("Качаем!");


		$.ajax({
            url: 'php/getimage.php',
            type: 'POST',
            dataType: 'json',
            data: data,
        }).done( function(result) {
            console.log('Выполнено!');
            console.log(result);
        }).fail( function(ans) {
            console.log('Проблемы в PHP');
            console.log(ans);
        });
	};


	return {
		init: init,
	};

})();


download.init();
