var upload = (function() {

	//	Иницализация модуля
	var init = function() {
		_setUpListeners();
	};

	// Установка прослушки
	var _setUpListeners = function() { 
		$('#main_img').on('change', _showMainPath); // Показываем путь для main image
		$('#water_img').on('change', _showWaterPath); // Показываем путь для main image
	};

	// Показываем путь для main image
	var _showMainPath = function(e) {
		e.preventDefault();
		
		var filename = $("#main_img_name"),
			path = $("#main_img").val().replace(/\\/g, '/').replace(/.*\//, '');
		
		filename.val(path); 

	};

	// Показываем путь для вотермарка
	var _showWaterPath = function(e) {
		e.preventDefault();
		
		var filename = $("#water_img_name"),
			path = $("#water_img").val().replace(/\\/g, '/').replace(/.*\//, '');
		
		filename.val(path); 

	};
	
	var _ajaxForm = function (form, url) { 


		
		// если false, то код ниже не произойдёт никогда
	};



	// Возвращаем объект (публичные методы)
	return {
		init: init,
	};

})();

upload.init();
