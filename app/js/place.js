var changePlace = (function () {

	var tiling = false;

	var init = function () {
		_setUpListeners(tiling);
	};

	
	var _setUpListeners = function() {
		$('.position__control__x_point-top').on('click', _increaseX); // При клике верх (по X)
		$('.position__control__x_point-bottom').on('click', _lowerX); // При клике вниз (по X)
		$('.position__control__y_point-top').on('click', _increaseY); // При клике верх (по Y)
		$('.position__control__y_point-bottom').on('click', _lowerY); // При клике вниз (по Y)
		$('.position__grid_item').on('click', _placeImg); // При клике радио #1 
		$('.control__position__tiling').on('click', _watermarkClonesCreate); // Размножаем вотермарки
		$('.control__position__ordinary').on('click', _watermarkClonesKill); // Убиваем клонов
		$('#reset').on('click', restorePosDefault); // Сбрасываем при нажатии на Сброс
	}

	var setUpInitializeListeners = function() {
		$('.canvas__img-wrapper').on('drag', _followPos); // При драге вотермарка
		$('.ui-slider-handle').on('mousemove', _changeOpacity); // Меняем прозрачность
	}

	// Создаём клонов
	var _watermarkClonesCreate = function() {
		var mainImg = $(".canvas__main-img"),
			watermarkWrap = $(".canvas__img-wrapper"),
			watermark = $(".canvas__img"),
			boxTextX = $('#value__x_point'),
			boxTextY = $('#value__y_point'),
			lineHor = '<div class="line-hor"></div>',
			lineVert = '<div class="line-vert"></div>',
			grid = $('.control__position__grid'),
			gridWidth = grid.width(),
			gridHeight = grid.height(),
			amountWidth = Math.ceil(mainImg.width() / watermark.width()),
			amountHeight = Math.ceil(mainImg.height() / watermark.height()),
			amount = amountWidth * amountHeight - 1;
		
		restorePosDefault();
		tiling = true;
		
		$(".position__grid_item").removeClass('active');

		watermark.css('margin', '0');

		grid.append(lineHor);
		grid.append(lineVert);
		lineHor = $('.line-hor');
		lineVert = $('.line-vert');
		lineHor.css('position', 'absolute');
		lineHor.css('width', '100%');
		lineHor.css('border', '1px solid red');
		lineHor.css('top', gridHeight/2);
		lineVert.css('position', 'absolute');
		lineVert.css('height', '100%');
		lineVert.css('border', '1px solid red');
		lineVert.css('left', gridWidth/2);

		watermarkWrap.width(watermark.width() * amountWidth + 10);
		
		boxTextX.val('0');
		boxTextY.val('0');

		mainImg.css("overflow", "hidden");
		watermark.css("display", "inline-block");
		watermark.css("padding", "0px");

		for (i=0; i<amount; i++) {
			watermark.clone().appendTo(watermarkWrap);
		};

		watermarkWrap.draggable({	// Делаем его "дрэггэбл"
			   containment: 'null'
			});
	};

	// Убиваем клонов

	var _watermarkClonesKill = function() {
		var watermark = $('.canvas__img'),
			lineHor = $('.line-hor'),
			lineVert = $('.line-vert'),
			watermarkWrap = $(".canvas__img-wrapper");
		tiling = false;
		
		lineHor.remove();
		lineVert.remove();

		for (i=0; i<watermark.length-1;i++) {
			watermark[i].remove();
		};
		watermarkWrap.css('width', 'auto');
		watermarkWrap.draggable({	// Делаем его "дрэггэбл"
			   containment: 'parent'
			});
		restorePosDefault();
	}

	// Меняем прозрачность
	var _changeOpacity = function(e) {
		var op = $( "#slider-opacity" ).slider( "value" ) / 100;
		if ($('.canvas__img')) {
			$('.canvas__img').css('opacity', op);
		}
	};

	// При драге вотермарка отслеживать позицию в спиннерах
	var _followPos = function(e) {
		var watermarkWrap = $('.canvas__img-wrapper'),
			boxTextX = $('#value__x_point'),
			boxTextY = $('#value__y_point');
		if (!tiling) {
			boxTextX.val(watermarkWrap.position().left);
			boxTextY.val(watermarkWrap.position().top);
		};
	}


	// При клике верх по X меняем значение в боксе, смещаем картинку по X вправо 
	var _increaseX = function(e) {
		e.preventDefault();
		var boxText = $('#value__x_point'),
			img = $('.canvas__img');

		if (validation.checkfields()) {
			if (!tiling) {
				var img = $('.canvas__img-wrapper'),
					cX = img.position().left + 1,
					imgWidth = img.width(),
					mainWidth = $('.canvas__main-img').width();
				if (cX + imgWidth <= mainWidth) {
					boxText.val(cX);
					img.css("left", cX + "px");
				};
			} else {
				var lineVert = $('.line-vert'),
					gridWidth = $('.control__position__grid').width(),
					coord = parseInt(lineVert.css('left')) - 1,
					borderLeftWidth = parseInt(lineVert.css('border-left-width')) + 1,
					borderRightWidth = parseInt(lineVert.css('border-right-width')) + 1;
				if (gridWidth > borderLeftWidth + borderRightWidth) {
					lineVert.css('border-left-width', borderLeftWidth + 'px');
					lineVert.css('border-right-width', borderRightWidth + 'px');
					lineVert.css('left', coord);
					boxText.val(borderLeftWidth-1);
					img.css('margin-bottom', borderLeftWidth-1 + 'px');
				};
			};
		};
	};

	// При клике вниз по X меняем значение в боксе, смещаем картинку по X влево 
	var _lowerX = function(e) {
		e.preventDefault();
		var boxText = $('#value__x_point'),
			img = $('.canvas__img');
		if (validation.checkfields()) {
			if (!tiling) {
				var img = $('.canvas__img-wrapper'),
					cX = img.position().left - 1;
				if (cX >= 0) {
					boxText.val(cX);
					img.css("left", cX + "px");
				};
			} else {
				var lineVert = $('.line-vert'),
					gridWidth = $('.control__position__grid').width(),
					coord = parseInt(lineVert.css('left')) + 1,
					borderLeftWidth = parseInt(lineVert.css('border-left-width')) - 1,
					borderRightWidth = parseInt(lineVert.css('border-right-width')) - 1;
				if (borderLeftWidth + borderRightWidth > 1) {
					lineVert.css('border-left-width', borderLeftWidth + 'px');
					lineVert.css('border-right-width', borderRightWidth + 'px');
					lineVert.css('left', coord);
					boxText.val(borderLeftWidth-1);
					img.css('margin-bottom', borderLeftWidth-1 + 'px');
				};
			};
		};
	};

	// При клике вверх по Y меняем значение в боксе, смещаем картинку по Y вниз 
	var _increaseY = function(e) {
		e.preventDefault();
		var boxText = $('#value__y_point'),
			img = $('.canvas__img');
		if (validation.checkfields()) {
			if (!tiling) {
				var img = $('.canvas__img-wrapper'),
					cY = img.position().top + 1,
					imgHeight = img.height(),
					mainHeight = $('.canvas__main-img').height();
				if (cY + imgHeight <= mainHeight) {
					boxText.val(cY);
					img.css("top", cY + "px");
				};
			} else {
				var lineHor = $('.line-hor'),
					mainImg = $('.canvas__main-img'),
					watermark = $('.canvas__img'),
					watermarkWrap = $('.canvas__img-wrapper'),
					amountWidth = Math.ceil(mainImg.width() / watermark.width()),
					watermarkWrapWidth = parseInt(watermarkWrap.width() + amountWidth),
					gridWidth = $('.control__position__grid').width(),
					coord = parseInt(lineHor.css('top')) - 1,
					borderTopWidth = parseInt(lineHor.css('border-top-width')) + 1,
					borderBottomWidth = parseInt(lineHor.css('border-bottom-width')) + 1;
				if (gridWidth > borderTopWidth + borderBottomWidth) {
					lineHor.css('border-top-width', borderTopWidth + 'px');
					lineHor.css('border-bottom-width', borderBottomWidth + 'px');
					lineHor.css('top', coord);
					boxText.val(borderTopWidth-1);
					watermarkWrap.width(watermarkWrapWidth + 'px');
					img.css('margin-right', borderTopWidth-1 + 'px');
				};
			};
		};
	};

	// При клике вверх по Y меняем значение в боксе, смещаем картинку по Y вниз 
	var _lowerY = function(e) {
		e.preventDefault();
		var boxText = $('#value__y_point'),
					img = $('.canvas__img');
		if (validation.checkfields()) {
			if (!tiling) {
				var img = $('.canvas__img-wrapper'),
					cY = img.position().top - 1;
				if (cY >= 0) {
					boxText.val(cY);
					img.css("top", cY + "px");
				};
			} else {
				var lineHor = $('.line-hor'),
					mainImg = $('.canvas__main-img'),
					watermark = $('.canvas__img'),
					watermarkWrap = $('.canvas__img-wrapper'),
					amountWidth = Math.ceil(mainImg.width() / watermark.width()),
					watermarkWrapWidth = parseInt(watermarkWrap.width() - amountWidth),
					gridWidth = $('.control__position__grid').width(),
					coord = parseInt(lineHor.css('top')) + 1,
					borderTopWidth = parseInt(lineHor.css('border-top-width')) - 1,
					borderBottomWidth = parseInt(lineHor.css('border-bottom-width')) - 1;
				if (borderTopWidth + borderBottomWidth > 1) {
					lineHor.css('border-top-width', borderTopWidth + 'px');
					lineHor.css('border-bottom-width', borderBottomWidth + 'px');
					lineHor.css('top', coord);
					boxText.val(borderTopWidth-1);
					watermarkWrap.width(watermarkWrapWidth + 'px');
					img.css('margin-right', borderTopWidth+1 + 'px');
				};
			};
		};
	};

	// При клике радио отправляю вотермарк в левый верхний угол (ОСТОРОЖНО МАГИЯ!)
	var _placeImg = function(e) {
		e.preventDefault();
		if (validation.checkfields()) {
			if (!tiling) {
				var img = $('.canvas__img'),
					$this = $(this);
				$(".position__grid_item").removeClass('active');
				$this.addClass('active');
				_magicCalculations($this);
			};
		};		
	}
	
	var _magicCalculations = function($this) {
		var button = $this,
			img = $('.canvas__img-wrapper'),
			boxTextX = $('#value__x_point'),
			boxTextY = $('#value__y_point');
		// МАГИЧЕСКИЕ ВЫЧИСЛЕНИЯ
		switch (button.attr('id')) {
			case '1':
				img.css('top', 0).css('left',0);
				break
			case '2': 
				img.css('top', 0).css('left', Math.round($('.canvas__main-img').width() / 2 - img.width() / 2) );
				break
			case '3': 
				img.css('top', 0).css('left', $('.canvas__main-img').width() - img.width());
				break
			case '4':
				img.css('top', Math.round($('.canvas__main-img').height() / 2 - img.height() / 2)).css('left',0);
				break
			case '5': 
				img.css('top', Math.round($('.canvas__main-img').height() / 2 - img.height() / 2)).css('left', Math.round($('.canvas__main-img').width() / 2 - img.width() / 2 ));
				break
			case '6': 
				img.css('top', Math.round($('.canvas__main-img').height() / 2 - img.height() / 2)).css('left', $('.canvas__main-img').width() - img.width());
				break
			case '7':
				img.css('top', $('.canvas__main-img').height() - img.height()).css('left',0);
				break
			case '8': 
				img.css('top', $('.canvas__main-img').height() - img.height()).css('left', Math.round($('.canvas__main-img').width() / 2 - img.width() / 2 ));
				break
			case '9': 
				img.css('top', $('.canvas__main-img').height() - img.height()).css('left', $('.canvas__main-img').width() - img.width());
				break
		}	
		// Задаём значения в инпуты
		boxTextX.val(img.position().left);
		boxTextY.val(img.position().top);
	}

////////////////////////// DEFAULT END ///////////////////////////////////////////

	// Восстанавливаем значения по умолчанию
	restorePosDefault = function () {
		var boxTextX = $('#value__x_point'),
			boxTextY = $('#value__y_point'),
			img = $('.canvas__img-wrapper');
		if (tiling) {
			_watermarkClonesKill();
		}
		tiling = false;
		img.css('top',0).css('left',0);
		boxTextX.val('0');
		boxTextY.val('0');
		$(".position__grid_item").removeClass('active');
		$("#1").addClass('active');
		$("#parent-img")[0].reset();
    	$( "#slider-opacity" ).slider( "value", 100 );
    	$('.canvas__img').css('opacity','1');
    	$("#slider-opacity div").css({'width':'100%'});
    	$("#slider-opacity span").css({'left':'100%'});
    	$("#value__x_point").val('0');
    	$("#value__y_point").val('0');
	};
	
	var getTiling = function() {
		return tiling;
	}
	return {
		init: init,
		resetPos: restorePosDefault, // Функция сброса 
		startListen: setUpInitializeListeners,
		getTiling: getTiling
	};
})();

changePlace.init();

