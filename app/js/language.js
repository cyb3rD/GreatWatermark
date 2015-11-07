var Language = (function()  {

	var _changeLanguage = function($this) {
		var lang = $this.attr('id');
		$(".language__link").removeClass('active');
		$this.addClass('active');
		$.ajax({
			url: './php/languages/' + lang + '.json',
			type: 'POST',
			dataType: 'json',
			success : function (data) {
				LANGUAGE = data;
				$('body').find("[lng]").each(function () {
					var lng = LANGUAGE[ $(this).attr('lng') ];
					var tag = $(this)[0].tagName.toLowerCase();
					switch (tag) {
						case "input":
						$(this).attr("placeholder", lng);
						break;
						default:
						$(this).html(lng);
						break;
					}
				});
			}
		});
	};

	return {
		init: function() {
			$(".language__link").on("click", function(e) {
				e.preventDefault();
				_changeLanguage($(this));
			});
		}
	}
}());


$(document).ready(function(){
	if($(".language__link").length) {
		Language.init();
	}
});