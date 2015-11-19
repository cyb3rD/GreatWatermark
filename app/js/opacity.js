var opacity = (function () {

  var init = function () {
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


 
  return {
    init: init
  };

})();


opacity.init();



  
  