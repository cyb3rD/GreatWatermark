// Модуль валидации
var validation = (function (){

	var imageValid = function(elem, data) {
		var	name = data[0].files[0].name, // имя загружаемого файла
			size = data[0].files[0].size/1048576, //получаем размер файла в МБ
			type = data[0].files[0].type, //получаем тип файла
			valid = true; // по-умолчанию картинка валидна
		if(!(type.match(/\/(gif|jpeg|png|bmp)$/))) { // Проверяем тип файла
			createQtip(elem, "Неверный тип файла!");
			valid = false;
		} else if(size > 2) { // Проверяем размер файла
			createQtip(elem, "Слишком большой файл!");
			valid = false;
		}
		return valid;
	}

	var createQtip = function(elem, message) { //создаём qtip в случае ошибки
		qtipInput = elem.closest(".fileupload-wrapper").find(".fileupload-input"); // инпут, на который вешается тултип
		qtipInput.qtip({
			content: message,
			show: {
				event: 'show'
			},
			position: {
				my: 'right center',
				at: 'left center',
			},
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			},
			hide: {
		        event: 'unfocus'
		    }
		}).trigger('show');
	}


	var checkWaterSize = function(width, height) {
		var waterWidth = width,
			waterHeight = height,
			mainWidth = $(".canvas__main-img").width(),
			mainHeight = $(".canvas__main-img").height();
		if (mainWidth < waterWidth) {
			createQtip($("#water_img_name"), "Вотермарк шире главного изображения!");
			return false;
		} else if (mainHeight < waterHeight) {
			createQtip($("#water_img_name"), "У вотермарка высота больше, чем у главного изображения! !");
			return false;
		} else {
			return true;
		}
	}

	var checkWaterMark = function(data) {
			var data = data;
		if (!imageValid($('#water_img_name'), data)) {
			return false;
		} else if ($(".canvas__main-img").length == 0) {
			createQtip($("#main_img_name"), "Добавьте главное изображение!");
			return false;
		} else {
			return true;
		}
	}

	var checkfields = function() {
		var mainImgInput = $(".canvas__main-img"),
			waterImgInput = $(".canvas__img");
		if (mainImgInput.length == 0) {
			validation.createQtip($("#main_img_name"), "Добавьте главное изображение!");
		}
		if (waterImgInput.length == 0) {
			validation.createQtip($("#water_img_name"), "Добавьте вотермарк!");
		}
		if (mainImgInput.length == 0 || waterImgInput.length == 0) {
			return false;
		} else {
			return true;
		}
	}

	return {
		checkfields: checkfields,
		imageValid: imageValid,
		checkWaterMark: checkWaterMark,
		checkWaterSize: checkWaterSize,
		createQtip: createQtip
	};

})();