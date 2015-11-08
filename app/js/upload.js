var upload = (function() {

	//	Иницализация модуля
	var init = function() {
		var kw = 0,
			kh = 0,
			k = 1;
		$('#main_img').fileupload({
		    url: 'php/upload.php',
		    
		    add: function(e, data) {
		    	data.submit();
			},

			done: function(e, data) {
				var main_img = '<div class="canvas__main-img"></div>',
					canvas = $("#canvas"),
					props = $.parseJSON(data["result"]);

				canvas.append(main_img);
				main_img = $(".canvas__main-img");
				kw = props.width / canvas.width();
				kh = props.height / canvas.height();
				if (kw > kh) {
					k = kw;
				} else {
					k = kh;
				};

				main_img.attr('data-path', props.path);
				main_img.css("height", props.height / k + "px");
				main_img.css("width", props.width / k + "px");	
				main_img.css("background", "url(" + props.path+")");
				main_img.css("background-size", "100%");			
			}	
		});

		$('#water_img').fileupload({
		    url: 'php/upload.php',
		    
		    add: function(e, data) {
		    	data.submit();
			},

			done: function(e, data) {
				var water_img = '<div class="canvas__img upload-img"></div>',
					canvas = $("#canvas"),
					props = $.parseJSON(data["result"]);
				canvas.append(water_img);

				water_img = $(".canvas__img");
				water_img.attr('data-path', props.path);
				water_img.css("background", "url(" + props.path+")");
				water_img.css("width", props.width / k + "px");
				water_img.css("height", props.height / k + "px");
				water_img.css("background-size", "100%");
				canvas.append(water_img);
				$('.upload-img').draggable({
				   containment:'parent'
				});
				changePlace.init();
			}
		});

		
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
	
	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

upload.init();
