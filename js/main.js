/*кнопка Вверх*/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('.to_top').fadeIn();
		} else {
			$('.to_top').fadeOut();
		}
	});
	$('.to_top').click(function(e) {
        e.preventDefault();
		$('body,html').animate({scrollTop:0},800);
	});
}); 
/*кнопка Вверх END*/

/*слайдеры*/
$(document).ready(function() {		
    $('#slider').lightSlider({
        item:1,
        speed:1000,
        controls:true,
        enableDrag:false,
        enableTouch:true,
        freeMove:false,
        pager:false, 
        onSliderLoad: function() {
                $('#slider').removeClass('cS-hidden');
                $('.slider .lSAction').appendTo('.slider .container');
        }
        });		
    $('.allinc-slider').lightSlider({
        item:3,
        speed:1000,
        controls:true,
        enableDrag:false,
        enableTouch:true,
        freeMove:false,
        pager:false,
        responsive : [
            {
                breakpoint:1199,
                settings: {
                    item:2
                  }
            },
            {
                breakpoint:767,
                settings: {
                    item:1
                  }
            }
        ],
        onSliderLoad: function() {
                $('.allinc-slider').removeClass('cS-hidden');
                $('.allinc .lSAction').appendTo('.allinc-cont');
        }
        });	
    $('.serv-slider').lightSlider({
        item:3,
        speed:1000,
        controls:true,
        enableDrag:false,
        enableTouch:true,
        freeMove:false,
        pager:false,
        responsive : [
            {
                breakpoint:1199,
                settings: {
                    item:2
                  }
            },
            {
                breakpoint:767,
                settings: {
                    item:1
                  }
            }
        ],
        onSliderLoad: function() {
                $('.serv-slider').removeClass('cS-hidden');
                $('.serv .lSAction').appendTo('.serv-cont');
        }
        });
});
/*слайдеры END*/

/*datepicker*/
$(function() {
    $('#dt1').datepicker({
          numberOfMonths: 2,
          showButtonPanel: true
        });
});
/*datepicker END*/

/*скрипты для телефона*/
$('.h-mob-phn button').click(function(){
    $('.h-mob-phn-modal').toggleClass('active');
});

$('.h-mob-btn button').click(function(){
    $('.h-mob-menu').slideToggle();
});

/*скрипты для телефона END*/

/*фильтр*/
var checkBlur, someVal;
$(document).ready(function () {
    $(document).click(function(e) {
        checkBlur = e.target.className;
        switch(checkBlur){
               case 'adr':
                    modlAdr();
                    break;
               case 'count':
                    modlCount();
                    break;
               default:
                    if(checkBlur == 'minus' || checkBlur == 'plus'){}
                    else{
                        modlHide();
                    }
                
                    break;
        }
    });

    function modlAdr(){
        $('.change-form-place-modal').fadeIn();
        $('.change-form-count-modal').fadeOut();
    }    
    
    function modlCount(){
        $('.change-form-count-modal').fadeIn();
        $('.change-form-place-modal').fadeOut();
    }   
    
    function modlHide(){
        $('.change-form-place-modal').fadeOut();
        $('.change-form-count-modal').fadeOut();
    }

    $('.change-form-place-modal-row').click(function(){
        $('.change-form-place input').val($(this).text());
    });

    $('.change-form-count-modal-row .right .plus').click(function(){
        $(this).siblings('.num').val(parseInt($(this).siblings('.num').val())+1);
        personsCount();
    });  
    $('.change-form-count-modal-row .right .minus').click(function(){
        if( $(this).siblings('.num').val() != 0 ){
            $(this).siblings('.num').val(parseInt($(this).siblings('.num').val())-1);
            personsCount();
        }
    });   

    function personsCount(){
        $('[name="count"]').val($('#num').val()+' номера · '+$('#adult').val()+' дорослих · '+$('#child').val()+' дітей');
    }
});    
/*фильтр END*/