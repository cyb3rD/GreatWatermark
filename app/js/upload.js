var upload = (function() {

	//	Иницализация модуля
	var init = function() {

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
				main_img.css("background", "url(" + props.path+")");
				main_img.css("width", props.width + "px");
				main_img.css("height", props.height + "px");
				main_img.css("border", "1px solid black");
				canvas.append(main_img);
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
				water_img.css("background", "url(" + props.path+")");
				water_img.css("width", props.width + "px");
				water_img.css("height", props.height + "px");
				water_img.css("border", "1px solid black");
				canvas.append(water_img);
				$('.upload-img').draggable({
				   containment:'parent'
				});
				changePlace.init();
			}
		});		_setUpListeners();
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



		/*// ОТПРАВЛЯЕМ ГЛАВНУЮ ПИКЧУ

		var _ajaxForm = function () { 

		    var form = $('#parent-img'),
	            url = 'php/upload.php',
	            data = form.serialize();
	            console.log(form);

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
		*/
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
		init: init
	};

})();

upload.init();
