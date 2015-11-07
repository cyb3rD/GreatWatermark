// Модуль валидации
var validation = (function (){

	var imageValid = function(elem) {
		var	name = elem[0].files[0].name, // имя загружаемого файла
			size = elem[0].files[0].size/1048576, //получаем размер файла в МБ
			type = elem[0].files[0].type, //получаем тип файла
			qtipInput = elem.closest(".fileupload-wrapper").find(".fileupload-input"), // инпут, на который вешается тултип
			valid = true; // по-умолчанию картинка валидна

		if(!(type.match(/^image\/(gif|jpeg|png|bmp)$/))) { // Проверяем тип файла
			createQtip(qtipInput, "Неверный тип файла!");
			valid = false;
		} else if(size > 2) { // Проверяем размер файла
			createQtip(qtipInput, "Слишком большой файл!");
			valid = false;
		}

		return valid;
	}

	var createQtip = function(elem, message) { //создаём qtip в случае ошибки
		elem.qtip({
			content: message,
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: {
				my: 'top center',
				at: 'bottom center',
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

	return {
		imageValid: imageValid,
		createQtip: createQtip
	};

})();