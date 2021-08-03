   
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
      $("a[data-rel='indexPhotoGallery11']").attr('rel', 'indexPhotoGallery11');
      $("#indexPhotoGallery11").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#indexLayer39').parallax();
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
      $("a[data-rel='indexPhotoGallery12']").attr('rel', 'indexPhotoGallery12');
      $("#indexPhotoGallery12").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery13']").attr('rel', 'indexPhotoGallery13');
      $("#indexPhotoGallery13").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery14']").attr('rel', 'indexPhotoGallery14');
      $("#indexPhotoGallery14").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery15']").attr('rel', 'indexPhotoGallery15');
      $("#indexPhotoGallery15").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery16']").attr('rel', 'indexPhotoGallery16');
      $("#indexPhotoGallery16").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery17']").attr('rel', 'indexPhotoGallery17');
      $("#indexPhotoGallery17").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery18']").attr('rel', 'indexPhotoGallery18');
      $("#indexPhotoGallery18").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      var $overlaymenu = $('#indexOverlayMenu2-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#indexOverlayMenu2').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      $("a[data-rel='indexPhotoGallery3']").attr('rel', 'indexPhotoGallery3');
      $("#indexPhotoGallery3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow8']").attr('rel', 'indexSlideShow8');
      $("#indexSlideShow8").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery4']").attr('rel', 'indexPhotoGallery4');
      $("#indexPhotoGallery4").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow11']").attr('rel', 'indexSlideShow11');
      $("#indexSlideShow11").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery5']").attr('rel', 'indexPhotoGallery5');
      $("#indexPhotoGallery5").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow14']").attr('rel', 'indexSlideShow14');
      $("#indexSlideShow14").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery6']").attr('rel', 'indexPhotoGallery6');
      $("#indexPhotoGallery6").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow15']").attr('rel', 'indexSlideShow15');
      $("#indexSlideShow15").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery7']").attr('rel', 'indexPhotoGallery7');
      $("#indexPhotoGallery7").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow16']").attr('rel', 'indexSlideShow16');
      $("#indexSlideShow16").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery8']").attr('rel', 'indexPhotoGallery8');
      $("#indexPhotoGallery8").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow17']").attr('rel', 'indexSlideShow17');
      $("#indexSlideShow17").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery9']").attr('rel', 'indexPhotoGallery9');
      $("#indexPhotoGallery9").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow18']").attr('rel', 'indexSlideShow18');
      $("#indexSlideShow18").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery10']").attr('rel', 'indexPhotoGallery10');
      $("#indexPhotoGallery10").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow19']").attr('rel', 'indexSlideShow19');
      $("#indexSlideShow19").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery19']").attr('rel', 'indexPhotoGallery19');
      $("#indexPhotoGallery19").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow20']").attr('rel', 'indexSlideShow20');
      $("#indexSlideShow20").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery20']").attr('rel', 'indexPhotoGallery20');
      $("#indexPhotoGallery20").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow21']").attr('rel', 'indexSlideShow21');
      $("#indexSlideShow21").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery21']").attr('rel', 'indexPhotoGallery21');
      $("#indexPhotoGallery21").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow22']").attr('rel', 'indexSlideShow22');
      $("#indexSlideShow22").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery22']").attr('rel', 'indexPhotoGallery22');
      $("#indexPhotoGallery22").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#indexLayer47').parallax();
      $('#indexLayer1').parallax();
      $("a[data-rel='indexSlideShow23']").attr('rel', 'indexSlideShow23');
      $("#indexSlideShow23").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery23']").attr('rel', 'indexPhotoGallery23');
      $("#indexPhotoGallery23").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow24']").attr('rel', 'indexSlideShow24');
      $("#indexSlideShow24").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery24']").attr('rel', 'indexPhotoGallery24');
      $("#indexPhotoGallery24").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexSlideShow25']").attr('rel', 'indexSlideShow25');
      $("#indexSlideShow25").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[data-rel='indexPhotoGallery25']").attr('rel', 'indexPhotoGallery25');
      $("#indexPhotoGallery25").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
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
   