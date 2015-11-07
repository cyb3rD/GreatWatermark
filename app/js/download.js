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
		console.log("Качаем!");
	};


	return {
		init: init,
	};

})();


download.init();
