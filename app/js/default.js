$(document).ready(function() {
		validation.createQtip($("#main_img"), "Загрузите изображение!"); //показать тултип
		validation.hideQtip($("#main_img")); //скрыть тултип
}());

// #main_img
// #water_img

// 1)если не загружен watermark - выводится тултип в 
// соответствующем поле с напоминаниме о загрузке водяного знака

// 2)если нет изображения - выводится тултип о необходимости загрузить изображение