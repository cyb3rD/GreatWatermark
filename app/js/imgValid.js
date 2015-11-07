// Модуль валидации
var validation = (function (){

	var imageValid = function(elem) {
		var	name = elem[0].files[0].name, // имя загружаемого файла
			size = elem[0].files[0].size/1048576, //получаем размер файла в МБ
			type = elem[0].files[0].type, //получаем тип файла
			valid = true; // по-умолчанию картинка валидна

		if(!(type.match(/^image\/(gif|jpeg|png|bmp)$/))) { // Проверяем тип файла
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
			}
		}).trigger('show');
	}

	var hideQtip = function(elem) {
		qtipInput = elem.closest(".fileupload-wrapper").find(".fileupload-input"); // инпут, на который вешается тултип
		qtipInput.qtip.hide;
	}

	return {
		imageValid: imageValid,
		createQtip: createQtip,
		hideQtip: hideQtip
	};

})();