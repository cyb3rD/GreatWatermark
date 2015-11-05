var changePlace = (function () {

	var init = function () {
		_setUpListneres();
	};

	// Устанавливаем прослушку
	
	var _setUpListneres = function () {
		$('.position__control__x_point-top').on('click', _increaseX); // При клике верх (по X)
		$('.position__control__x_point-bottom').on('click', _lowerX); // При клике вниз (по X)
		$('.position__control__y_point-top').on('click', _increaseY); // При клике верх (по Y)
		$('.position__control__y_point-bottom').on('click', _lowerY); // При клике вниз (по Y)
		$('.position__grid_item').on('click', _placeImg); // При клике радио #1 
		
	};

	// При клике верх по X меняем значение в боксе, смещаем картинку по X вправо 
	var _increaseX = function(e) {
		e.preventDefault();
		var boxText = $('.position__control_x_text'),
			img = $('.canvas__img'),
			cX = img.position().left + 1;
			imgWidth = img.width(),
			canvasWidth = $('.canvas__block').width();
		if (cX + imgWidth <= canvasWidth) {
			boxText.text(cX);
			img.css("left", cX + "px");
		};
	};

	// При клике вниз по X меняем значение в боксе, смещаем картинку по X влево 
	var _lowerX = function(e) {
		e.preventDefault();
		var boxText = $('.position__control_x_text'),
			img = $('.canvas__img'),
			cX = img.position().left - 1;
		if (cX >= 0) {
			boxText.text(cX);
			img.css("left", cX + "px");
		};
	};

	// При клике вверх по Y меняем значение в боксе, смещаем картинку по Y вниз 
	var _increaseY = function(e) {
		e.preventDefault();
		var boxText = $('.position__control_y_text'),
			img = $('.canvas__img'),
			cY = img.position().top + 1,
			imgHeight = img.height(),
			canvasHeight = $('.canvas__block').height();
		if (cY + imgHeight <= canvasHeight) {
			boxText.text(cY);
			img.css("top", cY + "px");
		};
	};

	// При клике вверх по Y меняем значение в боксе, смещаем картинку по Y вниз 
	var _lowerY = function(e) {
		e.preventDefault();
		var boxText = $('.position__control_y_text'),
			img = $('.canvas__img'),
			cY = img.position().top - 1;
		if (cY >= 0) {
			boxText.text(cY);
			img.css("top", cY + "px");
		};
	};

	// При клике радио #1 отправляю вотермарк в левый верхний угол
	var _placeImg = function(e) {
		e.preventDefault();
		var img = $('.canvas__img'),
			boxTextX = $('.position__control_x_text'),
			boxTextY = $('.position__control_y_text'),
			$this = $(this);
		$(".position__grid_item").removeClass('active');
		$this.addClass('active');
		switch ($this.attr('id')) {
			case '1':
				img.css('top', 0).css('left',0);
				break
			case '2': 
				img.css('top', 0).css('left', $('.canvas__block').width() / 2 - img.width() / 2 );
				break
			case '3': 
				img.css('top', 0).css('left', $('.canvas__block').width() - img.width());
				break
			case '4':
				img.css('top', $('.canvas__block').height() / 2 - img.height() / 2).css('left',0);
				break
			case '5': 
				img.css('top', $('.canvas__block').height() / 2 - img.height() / 2).css('left', $('.canvas__block').width() / 2 - img.width() / 2 );
				break
			case '6': 
				img.css('top', $('.canvas__block').height() / 2 - img.height() / 2).css('left', $('.canvas__block').width() - img.width());
				break
			case '7':
				img.css('top', $('.canvas__block').height() - img.height()).css('left',0);
				break
			case '8': 
				img.css('top', $('.canvas__block').height() - img.height()).css('left', $('.canvas__block').width() / 2 - img.width() / 2 );
				break
			case '9': 
				img.css('top', $('.canvas__block').height() - img.height()).css('left', $('.canvas__block').width() - img.width());
				break
		}	
		boxTextX.text(img.position().left);
		boxTextY.text(img.position().top);
	}
	
	

	return {
		init: init
	};
})();

if ($('.canvas__img').length) {
	changePlace.init();
};