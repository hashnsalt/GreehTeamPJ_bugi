
$(function(){

  //////////////////////// page_nav_scroll_event ///////////////////////


  $('.page_indicator ul li a').click(function(e){
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  });

  const pageBtn = $('.page_indicator ul li');
  const pageSection = $('.page');

  // function pageIndicatorScroll () {
  //   let scrollTop = $(window).scrollTop();

  
  //   $($('.page').get().reverse()).each(function(index, node) {
  //     let node = $(this);
  //     let offsetTop = parseInt
  //   })
  // }

  $(window).scroll(function(){

    pageSection.each(function(){
      let pagePoint = $(window).scrollTop();
      let i = $(this).index();
      console.log(i);

      if(pagePoint >= $(this).offset().top - 100){
        pageBtn.removeClass('anchor');
        pageBtn.eq(i).addClass('anchor');
      }

    });
  });




  /////////////////////////// header mobile-hambutton click event //////////////////////

  $('#ham_btn').change(function(){
    if($('#ham_btn').is(':checked')) {
      $('#ham_btn').prop("checked", true);
      $('.header .lnb').addClass('active');
      $('header .lnb .language_box label').css('color','#333333');
      $('.header .lnb .ham_button label span').css('background-color', '#585858');
      $('header .lnb .logo_b').css('display','block');
      $('header .lnb .logo_w').css('display','none');
      $('header .gnb ul li a, header .gnb .language_box label').css('color','#333333');

    } else {  
      $('#ham_btn').prop("checked", false);

      $('header .lnb .language_box label').css('color','#ffffff');
      $('.header .lnb').removeClass('active');
      $('.header .lnb .ham_button label span').css('background-color', '#ffffff');
      $('header .lnb .logo_b').css('display','none');
      $('header .lnb .logo_w').css('display','block');

      $('header .gnb ul li a, header .gnb .language_box label').css('color','#ffffff');

    } //****** lnb 스크롤 이벤트가 생긴 상태에서 햄버거 버튼을 눌렀다 끄면 lnb에 있던 속성이 사라지고 햄버거 버튼 속성만 남음(E)
  

  });//ham_button_chk_event 햄버거 버튼을 클릭하면 lnb의 배경색과 폰트 색이 변화하는 효과를 주기위한 jQuery문

  const hamLevel01 = $('.ham_lnb_menu .level01 .level01_tab');
  const hamLevel02 = $('.ham_lnb_menu .level02');

  hamLevel01.click(function(){
    let i = $(this).index();

    hamLevel01.removeClass('open');
    hamLevel01.eq(i).addClass('open');

    hamLevel02.removeClass('open_menu');
    hamLevel02.eq(i).addClass('open_menu');
  });//ham_menu_btn_click event 클래스 add,remove 함수를 이용하여 메뉴 tab을 만듬.


  const hamLevel03_tab = $('.ham_lnb_menu .level01 .level01_tab .level02 .level02_list button');


  hamLevel03_tab.click(function(){
    $(this).next('ul').slideToggle(300);
    $(this).parent('li').siblings('li').children('ul').slideUp(300);


  }); 


  ///////////////////// search button laypopup click event ////////////////////////


  // $('.search_button>label').click(function(){
  //   let searchPopCloseBtn = $('.search_button .search_shadowBox'); 
  //   $('.search_button .search_shadowBox').addClass('view');
  //   if($('.search_button .search_shadowBox').hasClass('view') == true) {
  //     searchPopCloseBtn.click(function(){
  //       $('.search_button .search_shadowBox').toggle().removeClass('view');
  //     });
  //   }
  // });


  ////////////////// lnb .fixed /////////////

  const gnbLabText = $('.header .gnb_pc ul li a, .header .gnb_pc .language_box label');
  const lnbLevel01List = $('.header .lnb_pc .lnb_level01>li');
  const lnbLevel01Text = $('.header .lnb_pc .lnb_level01 li a');

  $(window).scroll(function(){
    const lnbLanguageLabel = $('header .lnb_mo .language_box>label');
    const lnbHamBtn = $('.header .lnb_mo .ham_button label span');

    if($(window).scrollTop() > 50) {
      $('.header').addClass('active');

      $('.top_btn').stop().animate({
        opacity: 1
      }, 300);
      lnbLanguageLabel.css('color','#585858');
      $('.header .lnb .logo_b').css('display', 'block');
      $('.header .lnb .logo_w').css('display', 'none');
      lnbHamBtn.css('background-color', '#585858');
      gnbLabText.css('color','#585858');
      lnbLevel01List.css('border-right', '1px solid #585858');
      lnbLevel01Text.css('color', '#585858');
      $('#header').css('backgorund-color','#fff');
    } else if($(window).scrollTop() <= 0) {
      $('.header').removeClass('active');
      
      $('.top_btn').stop().animate({
        opacity: 0
      }, 300);
      lnbLanguageLabel.css('color','#ffffff');
      $('.header .lnb .logo_w').css('display', 'block');
      $('.header .lnb .logo_b').css('display', 'none');
      lnbHamBtn.css('background-color', '#ffffff');
      gnbLabText.css('color','#ffffff');
      lnbLevel01List.css('border-right', '1px solid #ffffff');
      lnbLevel01Text.css('color', '#ffffff');
    }
  });



  $('.top_btn').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
  });



  ////////////////////////// PC_header .lnb event //////////////////////////


  $('.header .lnb_pc .lnb_level01, .header .lnb_pc .lnb_level02').mouseover(function(){
    $('.header .lnb_pc .lnb_level02').stop().animate({
      height: 395
    });

    gnbLabText.css('color','#585858');
    lnbLevel01List.css('border-right', '1px solid #585858');
    lnbLevel01Text.css('color', '#585858');
    $('.header .lnb_pc .lnb_level02').css('border-top', '1px solid #ccc');

    $('.header_background').stop().animate({
      height: 120
    });

    $('.header .lnb .logo_b').css('display', 'block');
    $('.header .lnb .logo_w').css('display', 'none');

  });


  $('.header .lnb_pc .lnb_level01, .header .lnb_pc .lnb_level02').mouseout(function(){
    $('.header .lnb_pc .lnb_level02').stop().animate({
      height: 0
    });

    $('.header_background').stop().animate({
      height: 0
    }, function(){

      if($(window).scrollTop() > 50){
        gnbLabText.css('color','#585858');
        lnbLevel01Text.css('color', '#585858');
        lnbLevel01List.css('border-right', '1px solid #585858');

        $('.header .lnb .logo_w').css('display', 'none');
        $('.header .lnb .logo_b').css('display', 'block');
      } else if ($(window).scrollTop() <= 0) {
        gnbLabText.css('color','#ffffff');
        lnbLevel01List.css('border-right', '1px solid #ffffff');
        lnbLevel01Text.css('color', '#ffffff');
        $('.header .gnb .language_sheet ul li a').css('color','#585858');
    
        $('.header .lnb .logo_w').css('display', 'block');
        $('.header .lnb .logo_b').css('display', 'none');
      }
    });
    $('.header .lnb_pc .lnb_level02').css('border-top', 'none');

  });


  


  ///////////////////// visual_slider ////////////////////////

  let eleWidth = $('.visual_main .vs_frame .vs_sizing_box div').innerWidth();
  let state = false;
  let direction = 'left';
  let showVisual = $('.visual_main .vs_frame .vs_sizing_box .vs_sizing'); //div
  let vsPagePc = $('.vs_page_indi_pc li');


  $('.counter_indi').text(showVisual.index()+1 + '/3');

  function left() {
    direction = 'left';
    $('.visual_main .vs_frame .vs_sizing_box').stop().animate({
      left: eleWidth * -1
    }, 300, function(){
      $(this).children('div:first').insertAfter($(this).children('div:last')).removeClass('live');
      $(this).css('left',0).children('div:first').addClass('live');
      // if(showVisual.offset().left == 0) {
      //   $('.test_index').text(showVisual.index());
      // }
      if(showVisual.hasClass('live') == true) {
        $('.counter_indi').text(showVisual.index()+1 + '/3');
      }
      state = false;

      
    });



  }// left() button_click event

  function right() {
    direction = 'right';
    $('.visual_main .vs_frame .vs_sizing_box div:last').insertBefore($('.visual_main .vs_frame .vs_sizing_box div:first')).addClass('live');
    $('.visual_main .vs_frame .vs_sizing_box div:first').siblings().removeClass('live');
    $('.visual_main .vs_frame .vs_sizing_box').css('left', eleWidth*-1);
    $('.visual_main .vs_frame .vs_sizing_box').stop().animate({
      left: 0
    }, 300, function(){
      if(showVisual.hasClass('live') == true) {
        $('.counter_indi').text(showVisual.index()+1 + '/3');
      }
      // 3번그림이 2번으로 잡히고 2번 그림이 3번으로 잡힘순서가 이상함.... (********************E)
      state = false;
    });
  } //right() button_click event

  /////////////////////////////mobile_btn////////////////////////////

  $('.left_mo, .page_indi_left').click(function(){
    if(!state) {
      state = true;
      left();
    }
  });

  $('.right_mo, .page_indi_right').click(function(){
    if(!state){
      state = true;
      right();
    }
  });

  // var swiper = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction"
  //   },
  //   navigation: {
  //     nextEl: ".right",
  //     prevEl: ".left"
  //   },
  
  // });

  vsPagePc.click(function(){
    // let i = vsPagePc.index();
    // if(showVisual.index() == vsPagePc.index()){
      $(this).addClass('picker').siblings().removeClass('picker');
    // }

  });




  ///////////////////// search PC animate /////////////////

  // const bugiImg = $('.search_pc .bugi_search .search_bg_img .bugi_animate_img .bugi_img');

  // $('.search_pc').mouseover(function(){
  //     $(this).stop().animate({
  //       left:0
  //     },500);
  //     });


  // $('.search_pc').mouseout(function(){
  //   $(this).stop().animate({
  //   },500);
  // })





//   setInterval(function(){

//     $('.scroll_down_action').stop().animate({bottom: 0, opacity: 1}).animate({
//       bottom: -30,
//       opacity: 0
//     }, 3000);

//   }, 3000);



  ///////////////////// contents01_tab meta_menu slide ///////////////////

  const conInfoTab = $('.contents_inner .contents01_tab_box .contents01_tab>a'); 

  conInfoTab.click(function(){
    let i = $(this).index();


    if($(this).hasClass('on') === false) {
      $(this).addClass('on').css('color','#ffffff').css('border','1px solid #E21366');
      $(this).eq(i).parent().siblings().children('a').removeClass('on').css('color','#222222').css('border','1px solid black');
    } else {
      $(this).removeClass('on').css('color','#222222').css('border','1px solid black');
    }

    $(this).siblings('div').slideToggle();
    $(this).parent('li').siblings('li').children('div').slideUp();

  });


  //////////////////// contents01_tab guide_card fade-in-out ////////////////////////

  // const conGuideCard = $('.contents01_guide_card');

  // $(window).scroll(function(){
  //   if($(this).scrollTop() >= $('.'))
  // });

  // $(window).scroll(function(){
  //   let val = $(this).scrollTop();
  //   console.log(val);
  //   if(val >= $('.vs_frame').innerHeight()/3) {
  //     $('.contents01_guide_card .gd_card01').animate({
  //       top: 20
  //     }, 1000);
  //     // if($('.contents01_guide_card .gd_card01').position().top == $('.contents01_guide_card').position().top){
  //     //   $('.contents01_guide_card .gd_card01').fadeIn(500);
  //     // } //fade-in-out 실패/////////
  //   }
  // });


  //////////////////////contents01_gd_card scroll event ///////////////////

  


  

  ////////////////contents02 notify /////////////////////////

  let notifyElementWidth = $('.notify .notify_frame .notify_contents .noti_content').innerWidth();
  // let noti = $('.notify .notify_frame .notify_contents .noti_content').outerWidth();
  let direcControl = 'left_act';
  // let showNotify = $('.notify .notify_frame .notify_contents .noti_content');

  function left_act() {
    direcControl = 'left_act';
    $('.notify .notify_frame .notify_contents').stop().animate({
      left: notifyElementWidth * -1
    }, 500, function(){
      $(this).children('div:first').insertAfter($(this).children('div:last'));
      $(this).css('left', 0);

      state = false;
    });
  }

  function right_act() {
    direcControl = 'right_act';
    $('.notify .notify_frame .notify_contents div:last').insertBefore($('.notify .notify_frame .notify_contents div:first'));
    $('.notify .notify_frame .notify_contents').css('left', notifyElementWidth*-1);
    $('.notify .notify_frame .notify_contents').stop().animate({
      left: 0
    }, 500, function(){
      state = false;
    });
  }

  $('.left_con').click(function(){
    if(!state) {
      state = true;
      right_act();
    }
  });

  $('.right_con').click(function(){
    if(!state) {
      state = true;
      left_act();
    }
  });




  /////////////////////////// contents03 ////////////////////////////////

  let swiperCardItem = new Swiper(".mo_card_frame", {

    spaceBetween: 20,
    slidesPerView: 2,
    autoHeight: true,
    pagination: {
      el: ".pagi_bullet",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }

  });


////////////////////// contents03-pc_view_box /////////////////

  const mainTabView = $('.contents03_view_box .tab_view>img');
  const thumbTab = $('.contents03_tab_box ul .contents03_tab');

  thumbTab.click(function(){
    

    $(this).addClass('on_color').siblings('li').removeClass('on_color');    mainTabView.attr('src',$(this).children('.con03_tab_img').children('img').attr('src'));
  });
  //////////////////////////// contents04 ////////////////////////////////


  var swiperMoArt = new Swiper(".artMySwiper", {

    // spaceBetween: 10,
    slidesPerView: 1,
    // centeredSlides: true,
    // freeMode: true,
    autoHeight: true,
    loop: true,
    watchOverflow : true,
    watchSlidesProgress: true,
    // touchRatio: 0.2,
    navigation: {
      nextEl: ".slider_right",
      prevEl: ".slider_left"
    },
    pagination: {
      el: ".slider_page",
      type: "fraction",
      renderFraction: function(currentClass,totalClass) {
        return '<span class="pageNation"><span class ="' + currentClass + '"></span>' + ' / ' + '<span class ="' + totalClass + '"></span></span>';
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }

  });

  $('.mo_art_slider_auto_controller .mo_art_slider_start').click(function(){
    swiperMoArt.autoplay.start();
    $('.mo_art_slider_auto_controller .mo_art_slider_stop').addClass('on_btn');
    $('.mo_art_slider_auto_controller .mo_art_slider_start').removeClass('on_btn');
  });
  $('.mo_art_slider_auto_controller .mo_art_slider_stop').click(function(){
    swiperMoArt.autoplay.stop();
    $('.mo_art_slider_auto_controller .mo_art_slider_start').addClass('on_btn');
    $('.mo_art_slider_auto_controller .mo_art_slider_stop').removeClass('on_btn');
  });


  ///////////////////// contents04-pc ////////////////////

  
  let swiperTopNum = $('.gallery-top').find('.swiper-slide');
	let swiperSubNum = $('.gallery-thumbs').find('.swiper-slide');
	// let swiperSubNum = $('.gallery-thumbs').find('.gallery-thumbs');

	let galleryTop = new Swiper('.gallery-top', {
    	spaceBetween: 20,	//슬라이드 간격
      effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction : false,
    },
		loop: true,	//슬라이드 반복
		loopedSlides: swiperTopNum.length	//loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
    });

    let galleryThumbs = new Swiper('.gallery-thumbs', {
      // slidesPerView: 6,
      autoHeight:true,
    	spaceBetween: 20,
    	navigation: {
    		nextEl: '.art-show-prev',	
        prevEl: '.art-show-next',	
    	},
    	// centeredSlides: true,
    	slidesPerView: 'auto',	
    	touchRatio: 0.2,	
    	slideToClickedSlide: true,	
		loop: true,	
		loopedSlides: swiperSubNum.length,
    loopAdditionalSlides: 1,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    $('.slider_auto_controller .art_thumb_start').click(function(){
      galleryTop.autoplay.start();
      $('.slider_auto_controller .art_thumb_stop').addClass('on_btn');
      $('.slider_auto_controller .art_thumb_start').removeClass('on_btn');
    });
    $('.slider_auto_controller .art_thumb_stop').click(function(){
      galleryTop.autoplay.stop();
      $('.slider_auto_controller .art_thumb_start').addClass('on_btn');
      $('.slider_auto_controller .art_thumb_stop').removeClass('on_btn');
    });

  // var swiper_vs = new Swiper(".mySwiper01", {
  //   pagination: {
  //       el: ".page_indi_nat",
  //       clickable: true,
  //       renderBullet: function (index, className) {
  //         return '<li class="' + className + '">' + (index + 1) + "</li>";
  //       }
  //     }
  // });


  ///////////////////// contents04 art_performace //////////////////////

  const swiperShowArt = new Swiper('.art_show_swiper .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    // innerWidth: auto,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction : false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    navigation: {
      prevEl: '.art_show_prev',
      nextEl: '.art_show_next'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 100
      }
    }
  
   });
  
   $('.art_show_autoplay_control .auto_start').click(function(){
    swiperShowArt.autoplay.start();
    $('.art_show_autoplay_control .auto_stop').addClass('on_btn');
    $('.art_show_autoplay_control .auto_start').removeClass('on_btn');
   });
  
   $('.art_show_autoplay_control .auto_stop').click(function(){
    swiperShowArt.autoplay.stop();
    $('.art_show_autoplay_control .auto_start').addClass('on_btn');
    $('.art_show_autoplay_control .auto_stop').removeClass('on_btn');
   });
  



  ////////////////////////// footer_tab //////////////////////////////////

  const footerTab = $('.footer .footer_tabs .foot_tab_box .foot_tab');

  footerTab.click(function(){
    $(this).siblings('ul').slideToggle(500);
    
$(this).parent('.foot_tab_box').siblings('.foot_tab_box').children('ul').slideUp(500);

  });
  



});





document.addEventListener('DOMContentLoaded', () => {



///////////////////// contents01_card_scroll_event_gsap /////////////////

const con01Els = document.querySelectorAll('.contents01_guide_card>div');

window.addEventListener('scroll', () => {

  if(window.scrollY > 500) {
    gsap.to(con01Els[0], 0.5, {
      opacity: 1,
      transform: 'translateY(0)',
    });
    gsap.to(con01Els[1], 0.5, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });
  } else {
    gsap.to(con01Els[0], 0.5, {
      opacity: 0,
      transform: 'translateY(100%)',

    });
    gsap.to(con01Els[1], 0.5, {
      opacity: 0,
      transform: 'translateY(100%)',
    })
  }
 });




///////////////////// contents01 ///////////////////

  const conBoxEvent = document.querySelectorAll('.gd_card');

  conBoxEvent.forEach((gdCard) => {
    gdCard.addEventListener('mouseover', function() {
      this.style.cssText = 'transform: translateY(-10px) translateX(-5px); transition: all 0.3s; box-shadow: 20px 20px 25px 7px #cccccc;'
    });

    gdCard.addEventListener('mouseout', function(){
      this.style.cssText = '';
    });

  });


///////////////////// contents02 ///////////////////

  const conNotiBoxEvent = document.querySelectorAll('.noti_content');

  conNotiBoxEvent.forEach((notiBox) => {
    notiBox.addEventListener('mouseover', function(){
      this.style.cssText = 'transform: translateY(-10px) translateX(-5px); transition: all 0.3s; box-shadow: 20px 20px 25px 7px #cccccc;'
    });
    notiBox.addEventListener('mouseout', function(){
      this.style.cssText = '';
    });
  });


//////////////////// contents03 /////////////////////

  const cardBg = document.querySelector('.pc_card_frame .card_hover_bg');
  let cardItem = document.querySelectorAll('.pc_card_frame .card_item');

  cardItem.forEach((cardEl) => {
    cardEl.addEventListener('mouseover', function() {
      this.style.cssText = 'transform: scale(1.025) translateY(-5%); transition: all 0.3s; box-shadow: 20px 20px 25px 7px #cccccc;'
    });
    cardEl.addEventListener('mouseout', function(){
      this.style.cssText = '';
    });
  });


  const cardItemMo = document.querySelectorAll('.mo_card_frame .mo_card a');

  cardItemMo.forEach((cardMoEl) => {
    cardMoEl.addEventListener('mouseover', function(){
      this.style.cssText = 'transform: scale(1.05); transition: all 0.3s;';
    });
    cardMoEl.addEventListener('mouseout', function(){
      this.style.cssText = '';
    });
  });


  // const contTabView = document.querySelector('.contents03_view_box .tab_view>img');

  // const cont03TabItems = document.querySelectorAll('.contents03_tab_box>ul>li a');

  // for(let i in cont03TabItems) {
  //   cont03TabItems[i].addEventListener('click',function(){
  //   });
  // }


});