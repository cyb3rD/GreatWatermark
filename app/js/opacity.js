$(document).ready(function(){


  /*   Slider Opacity   */
  $(function() {
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
  });

  /*  Reset Button  */
  $("#reset").click(function(){
    $("#parent-img")[0].reset();
    $("#sliderAmount").val('100');
    $('.canvas__img').css('opacity',$( "#slider-opacity" ).slider( "value" ));
    $("#slider-opacity div").css({'width':'100%'});
    $("#slider-opacity span").css({'left':'100%'});
    $("#value__x_point").val('0');
    $("#value__y_point").val('0');
    changePlace.resetPos();
  });


});
