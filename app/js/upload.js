var upload = (function() {

	//	Иницализация модуля
	var init = function() {
		_initializeUploads();
	};

	// Инициализируем аплоуды
	var _initializeUploads = function() {
		var kw = 1, // Объявляем коэффициент ширины
			kh = 1, // Объявляем коэффициент высоты
			k = 1;	// Объявляем общий коэффициент
		
		// Инициализируем аплоуд фонового изображения
		$('#main_img').fileupload({
		    url: 'php/upload.php',
		    
		    add: function(e, data) {
		    	if (validation.imageValid($('#main_img_name'),$(data))) {
		    		data.submit();
		    	}
			},

			done: function(e, data) {
				var main_img = '<div class="canvas__main-img"></div>', // Создаём фоновое изображение
					canvas = $("#canvas"),  // Находим канвас
					props = $.parseJSON(data["result"]); // Превращаем возвращаемый с бэка результат в доступный вид
					filename = $("#main_img_name"), // Находим инпут для выведения имени файла
					name = props.fileName; // Находим имя файла
				// Если до загрузки фона уже были изображения, удаляем
				if ($(".canvas__main-img")) {
					$(".canvas__main-img").remove();
				}
				// Если до загрузки фона уже были вотермарки, удаляем
				if ($(".canvas__img")) {
					$(".canvas__img").remove();
					$("#water_img_name").val('');
				}
				filename.val(name); // Задаём в инпут имя файла
				canvas.append(main_img);  
				main_img = $(".canvas__main-img");
				kw = props.width / canvas.width(); // Считаем ширину
				kh = props.height / canvas.height(); // и высоту 
				if (kw > kh) { // Выбираем больший коэффициент
					k = kw;
				} else {
					k = kh;
				};

				main_img.attr('data-path', props.path); // Записываем путь к файлу в атрибут тэга
				main_img.css("height", props.height / k + "px"); // Ресайзим высоту
				main_img.css("width", props.width / k + "px");	 // Расайзим ширину
				main_img.css("background", "url(" + props.path+")");  // Задаём бэкграунд
				main_img.css("background-size", "100%");  // Умещаем картинку в размеры
			}	
		});

		// Инициализируем аплоуд вотермарка
		$('#water_img').fileupload({
		    url: 'php/upload.php',
		    
		    add: function(e, data) {
		    	if (validation.checkWaterMark($(data))) {
		    		console.log('Загружаю!');
		   			data.submit();
		    	} 
			},

			done: function(e, data) {
				var props = $.parseJSON(data["result"]);
				console.log('Загружаю!');
				if (validation.checkWaterSize(props.width / k, props.height / k)) {
					_addWaterMark(props, k);
				}
			}
		});
	}

	var _addWaterMark = function(props, k) {
		var water_img = '<div class="canvas__img upload-img"></div>',
			k = k,
			canvas = $("#canvas"),
			main_img = $(".canvas__main-img"),
			props = props,
			filename = $("#water_img_name"),
			name = props.fileName;

		// Если до загрузки вотермарка уже были вотермарки, удаляем
		if ($(".canvas__img")) {
			$(".canvas__img").remove();
		}

		filename.val(name);					 
		main_img.append(water_img);
		water_img = $(".canvas__img");
		water_img.attr('data-path', props.path);
		water_img.attr('data-koef', k);
		water_img.css("background", "url(" + props.path+")");
		water_img.css("width", props.width / k + "px");
		water_img.css("height", props.height / k + "px");
		water_img.css("background-size", "100%");
		main_img.append(water_img);  // Запираем вотермарк в фоновом изображении
		$('.upload-img').draggable({	// Делаем его "дрэггэбл"
		   containment:'parent'	// Запираем дрэг в родительском элементе
		});
		changePlace.init(); // Инициализируем модуль 
	}
	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

upload.init();
