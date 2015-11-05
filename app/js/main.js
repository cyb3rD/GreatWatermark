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
    $("#sliderAmount").val('49');
    $("#slider-opacity div").css({'width':'49%'});
    $("#slider-opacity span").css({'left':'49%'});
    $("#value__x_point").val('0');
    $("#value__y_point").val('0');
  });

});

//=================================
// Отправка изображений на сервер
//=================================

!function () {
  var
      app, self,
      pics = $('.fileupload'),
      wrap = $('.upload-wrapper'),
      imgArea = $('.img-area'),
      GLOBALSCALE = 1,

      defObj = {
        url: 'php/upload.php',
        type: 'POST',

        success: function (src) {
          var
              data = JSON.parse(src),
              loadPicWidth = data.width,
              loadPicHeight = data.height,
              loadPicName = data.fileName,
              loadImg = $('<img/>', {
                src: data.path,
                id: data.inputName,
                'class': data.inputName
              }),

              changeInputName = function() {
                var name = data.fileName
                if ( name.length > 23 ) {
                  name = data.fileName.slice(0, 23) + '...';
                }
                $('input[name = ' + data.inputName + ']').closest('.form-group').find(wrap).text( name );
              };

          if (data.inputName === 'img') {
            $('#img').remove();

            loadImg.prependTo( imgArea );

            if (loadPicHeight > MAXHEIGHT || loadPicWidth > MAXWIDTH) {
              if (loadPicWidth > loadPicHeight) {
                loadImg.css('width', MAXWIDTH);
                GLOBALSCALE = MAXWIDTH / loadPicWidth;
              } else {
                loadImg.css('height', MAXHEIGHT);
                GLOBALSCALE = MAXHEIGHT / loadPicHeight;
              }
            }

            $('.upload__pic')
                .removeClass('disabled')
                .find(pics)
                .removeClass('disabled-input');
            changeInputName();
          } else {
            if ( wm ) { wm.remove(); }

            wm = loadImg;
            wmWidth = ~~( loadPicWidth * GLOBALSCALE );
            wmHeight = ~~( loadPicHeight * GLOBALSCALE );

            loadImg
                .css({
                  'width': wmWidth,
                  'height': wmHeight
                })
                .appendTo( imgArea );

            changeInputName();
            // инизиализируем модули
            initGlobal();
          }
        }
      };


  app = {
    init: function () {
      self = this;
      self.events();
    },

    events: function () {
      pics.fileupload(defObj);
    }
  }

  app.init();
}();