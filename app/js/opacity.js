var opacity = (function () {

  var init = function () {
    _setUpListneres();
    _sliderInit();
  };

/*   Slider Opacity   */
  var _sliderInit = function() {
    $( "#slider-opacity" ).slider({
      range: "min",
      value: 100,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#sliderAmount" ).val( ui.value );
      }
    });
    $( "#sliderAmount" ).val( $( "#slider-opacity" ).slider( "value" ) );
  };

  // Устанавливаем прослушку
  
  var _setUpListneres = function () {
    $("#reset").on('click', reset); // Отправляем координаты одной картинки относительно другой

  } 
 
  var reset = function(e) {
    $("#parent-img")[0].reset();
    $("#sliderAmount").val('100');
    $('.canvas__img').css('opacity','1');
    $("#slider-opacity div").css({'width':'100%'});
    $("#slider-opacity span").css({'left':'100%'});
    $("#value__x_point").val('0');
    $("#value__y_point").val('0');
    changePlace.resetPos();
  }
  return {
    reset: reset,
    init: init
  };

})();


opacity.init();



  
  