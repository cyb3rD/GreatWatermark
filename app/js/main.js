$(document).ready(function(){

  /*   Slider Opacity   */
  $(function() {
    $( "#slider-opacity" ).slider({
      range: "min",
      value: 49,
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
    $("#child-img")[0].reset();
  });

});
