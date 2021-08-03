   
   $(document).ready(function()
   {
      $('#indexLayer36').parallax();
      $("a[data-rel='indexSlideShow5']").attr('rel', 'indexSlideShow5');
      $("#indexSlideShow5").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow4']").attr('rel', 'indexSlideShow4');
      $("#indexSlideShow4").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow13']").attr('rel', 'indexSlideShow13');
      $("#indexSlideShow13").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow12']").attr('rel', 'indexSlideShow12');
      $("#indexSlideShow12").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow10']").attr('rel', 'indexSlideShow10');
      $("#indexSlideShow10").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow9']").attr('rel', 'indexSlideShow9');
      $("#indexSlideShow9").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow7']").attr('rel', 'indexSlideShow7');
      $("#indexSlideShow7").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow6']").attr('rel', 'indexSlideShow6');
      $("#indexSlideShow6").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow2']").attr('rel', 'indexSlideShow2');
      $("#indexSlideShow2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow1']").attr('rel', 'indexSlideShow1');
      $("#indexSlideShow1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery1']").attr('rel', 'indexPhotoGallery1');
      $("#indexPhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#indexLayer51').parallax();
      $("#indexEditbox1").change(function()
      {
         ShowObject('', 1);
      });
      $("#indexEditbox1").trigger('change');
      $("#indexEditbox2").change(function()
      {
         ShowObject('', 1);
      });
      $("#indexEditbox2").trigger('change');
      $("#indexFileUpload1 :file").on('change', function()
      {
         var input = $(this).parents('.input-group').find(':text');
         input.val($(this).val());
      });
      $("#indexEditbox5").change(function()
      {
         ShowObject('', 1);
      });
      $("#indexEditbox5").trigger('change');
      $("#indexEditbox7").change(function()
      {
         ShowObject('', 1);
      });
      $("#indexEditbox7").trigger('change');
      $("#indexEditbox11").change(function()
      {
         ShowObject('', 1);
      });
      $("#indexEditbox11").trigger('change');
      var $overlaymenu = $('#indexOverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#indexOverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      $("a[data-rel='indexSlideShow3']").attr('rel', 'indexSlideShow3');
      $("#indexSlideShow3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery2']").attr('rel', 'indexPhotoGallery2');
      $("#indexPhotoGallery2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery15']").attr('rel', 'indexPhotoGallery15');
      $("#indexPhotoGallery15").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery16']").attr('rel', 'indexPhotoGallery16');
      $("#indexPhotoGallery16").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery17']").attr('rel', 'indexPhotoGallery17');
      $("#indexPhotoGallery17").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery18']").attr('rel', 'indexPhotoGallery18');
      $("#indexPhotoGallery18").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      var $overlaymenu = $('#indexOverlayMenu3-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#indexOverlayMenu3').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      $("a[data-rel='indexPhotoGallery3']").attr('rel', 'indexPhotoGallery3');
      $("#indexPhotoGallery3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#indexLayer47').parallax();
      $("a[data-rel='indexPhotoGallery11']").attr('rel', 'indexPhotoGallery11');
      $("#indexPhotoGallery11").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery12']").attr('rel', 'indexPhotoGallery12');
      $("#indexPhotoGallery12").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery13']").attr('rel', 'indexPhotoGallery13');
      $("#indexPhotoGallery13").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery14']").attr('rel', 'indexPhotoGallery14');
      $("#indexPhotoGallery14").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#indexLayer1').parallax();
      $("a[data-rel='divanySlideShow1']").attr('rel', 'divanySlideShow1');
      $("#divanySlideShow1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery1']").attr('rel', 'divanyPhotoGallery1');
      $("#divanyPhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow2']").attr('rel', 'divanySlideShow2');
      $("#divanySlideShow2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery2']").attr('rel', 'divanyPhotoGallery2');
      $("#divanyPhotoGallery2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow3']").attr('rel', 'divanySlideShow3');
      $("#divanySlideShow3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery3']").attr('rel', 'divanyPhotoGallery3');
      $("#divanyPhotoGallery3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow4']").attr('rel', 'divanySlideShow4');
      $("#divanySlideShow4").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery4']").attr('rel', 'divanyPhotoGallery4');
      $("#divanyPhotoGallery4").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow5']").attr('rel', 'divanySlideShow5');
      $("#divanySlideShow5").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery5']").attr('rel', 'divanyPhotoGallery5');
      $("#divanyPhotoGallery5").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow6']").attr('rel', 'divanySlideShow6');
      $("#divanySlideShow6").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery6']").attr('rel', 'divanyPhotoGallery6');
      $("#divanyPhotoGallery6").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow7']").attr('rel', 'divanySlideShow7');
      $("#divanySlideShow7").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery7']").attr('rel', 'divanyPhotoGallery7');
      $("#divanyPhotoGallery7").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow8']").attr('rel', 'divanySlideShow8');
      $("#divanySlideShow8").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery8']").attr('rel', 'divanyPhotoGallery8');
      $("#divanyPhotoGallery8").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow9']").attr('rel', 'divanySlideShow9');
      $("#divanySlideShow9").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery9']").attr('rel', 'divanyPhotoGallery9');
      $("#divanyPhotoGallery9").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow10']").attr('rel', 'divanySlideShow10');
      $("#divanySlideShow10").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery10']").attr('rel', 'divanyPhotoGallery10');
      $("#divanyPhotoGallery10").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow11']").attr('rel', 'divanySlideShow11');
      $("#divanySlideShow11").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery11']").attr('rel', 'divanyPhotoGallery11');
      $("#divanyPhotoGallery11").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow12']").attr('rel', 'divanySlideShow12');
      $("#divanySlideShow12").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery12']").attr('rel', 'divanyPhotoGallery12');
      $("#divanyPhotoGallery12").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow13']").attr('rel', 'divanySlideShow13');
      $("#divanySlideShow13").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery13']").attr('rel', 'divanyPhotoGallery13');
      $("#divanyPhotoGallery13").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanySlideShow14']").attr('rel', 'divanySlideShow14');
      $("#divanySlideShow14").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='divanyPhotoGallery14']").attr('rel', 'divanyPhotoGallery14');
      $("#divanyPhotoGallery14").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
   
   $(document).ready(function(){
   	$('a[href^="#"]').on('click',function (e) {
   	    e.preventDefault();
   
   	    var target = this.hash,
   	    $target = $(target);
   
   	    $('html, body').stop().animate({
   	        'scrollTop': $target.offset().top
   	    }, 900, 'swing', function () {
   	        window.location.hash = target;
   	    });
   	});
   });
         
         var wb_indexTimer1;
         function TimerStartindexTimer1()
         {
            wb_indexTimer1 = setTimeout(function()
            {
               var event = null;
               ShowObject('modal_time', 1);
            }, 60000);
         }
         function TimerStopindexTimer1()
         {
            clearTimeout(wb_indexTimer1);
         }
         TimerStartindexTimer1();
            
   
   jQuery(function($) {
         $('#indexEditbox4').mask('+7(999) 999-99-99');
         $('#indexEditbox6').mask('+7(999) 999-99-99');
         $('#indexEditbox3').mask('+7(999) 999-99-99');
         $('#indexEditbox8').mask('+7(999) 999-99-99');
         $('#indexEditbox10').mask('+7(999) 999-99-99');
         $('#indexEditbox12').mask('+7(999) 999-99-99');
       });
   