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

		// ОТПРАВЛЯЕМ ГЛАВНУЮ ПИКЧУ

		var _ajaxForm = function () { 

		    var form = $('#parent-img'),
	            url = 'php/upload.php',
	            data = form.serialize();
	            console.log(data);

	        // ajax
	        $.ajax({
	            url: url,
	            type: 'POST',
	            dataType: 'json',
	            data: data
	        }).done(function(ans) {
	                if (ans.status === 'ok') {
	                    console.log(ans);   
	                } else {
	                    console.log(ans);    
	                }
	            })
	            .fail(function() {
	                console.log("error");
	            });
		};
		// ТОЧНЕЕ ТУТ ОТПРАВЛЯЕМ ГЛАВНУЮ ПИКЧУ
		_ajaxForm()

	};

	// Показываем путь для вотермарка
	var _showWaterPath = function(e) {
		e.preventDefault();
		
		var filename = $("#water_img_name"),
			path = $("#water_img").val().replace(/\\/g, '/').replace(/.*\//, '');
		
		filename.val(path); 

		// ОТПРАВЛЯЕМ ВОТЕРМАРК

		var _ajaxForm = function () { 

		    var form = $('#parent-img'),
	            url = 'php/upload.php',
	            data = form.serialize();
	            console.log(data);

	        // ajax
	        $.ajax({
	            url: url,
	            type: 'POST',
	            dataType: 'json',
	            data: data
	        }).done(function(ans) {
	                if (ans.status === 'ok') {
	                    console.log(ans);   
	                } else {
	                    console.log(ans);    
	                }
	            })
	            .fail(function() {
	                console.log("error");
	            });
		};
		// ТОЧНЕЕ ТУТ ОТПРАВЛЯЕМ ВОТЕРМАРК
		_ajaxForm()

	};
	
	
		




	// Возвращаем объект (публичные методы)
	return {
		init: init,
	};

})();

upload.init();