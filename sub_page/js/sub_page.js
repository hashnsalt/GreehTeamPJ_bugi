$(function(){

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

      // $('header .lnb .language_box label').css('color','#ffffff');
      $('.header .lnb').removeClass('active');
      // $('.header .lnb .ham_button label span').css('background-color', '#ffffff');
      // $('header .lnb .logo_b').css('display','none');
      // $('header .lnb .logo_w').css('display','block');

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

    // let i = $(this).index();

    // $(this).eq(i)
    // if($(this).hasClass('plus_btn') == true){
    // $(this).removeClass('plus_btn').children('.fa-plus').css('display','none').siblings('.fa-minus').css('display','block');
    // } else {
    //   $(this).eq(i).addClass('plus_btn');
    // $(this).eq(i).parent().siblings().children('button').addClass('plus_btn').children('.fa-minus').css('display','none').siblings('.fa-plus').css('display','block');
    // }

  }); 


  ////////////////////////// .sub_con01_pc .aside_menu ///////////////////////


  const asideLevel02 = $('.side_head_menu .level01 .level02 .level02_list a');
  
  asideLevel02.click(function(){
    $(this).next('ul').slideToggle(300);
    $(this).parent('li').siblings('li').children('ul').slideUp(300);
  });


  ////////////////// lnb .fixed /////////////

  const gnbLabText = $('.header .gnb_pc ul li a, .header .gnb_pc .language_box label');
  const lnbLevel01List = $('.header .lnb_pc .lnb_level01>li');
  const lnbLevel01Text = $('.header .lnb_pc .lnb_level01 li a');


  $(window).scroll(function(){
    const lnbLanguageLabel = $('header .lnb_mo .language_box>label');
    const lnbHamBtn = $('.header .lnb_mo .ham_button label span');

    lnbHamBtn.css('background-color', '#585858');
      gnbLabText.css('color','#585858');
      lnbLevel01List.css('border-right', '1px solid #eeeeee');
      lnbLevel01Text.css('color', '#585858');

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
      lnbLevel01List.css('border-right', '1px solid #eeeeee');
      lnbLevel01Text.css('color', '#585858');
      $('#header').css('backgorund-color','#fff');
    } else if($(window).scrollTop() <= 0) {
      $('.header').removeClass('active');
      
      $('.top_btn').stop().animate({
        opacity: 0
      }, 300);
      // lnbLanguageLabel.css('color','#ffffff');
      // $('.header .lnb .logo_w').css('display', 'block');
      // $('.header .lnb .logo_b').css('display', 'none');
      // lnbHamBtn.css('background-color', '#ffffff');
      // gnbLabText.css('color','#ffffff');
      // lnbLevel01List.css('border-right', '1px solid #ffffff');
      // lnbLevel01Text.css('color', '#ffffff');
    }
  });



  $('.top_btn').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
  });


  $('.header .lnb_pc .lnb_level01, .header .lnb_pc .lnb_level02').mouseover(function(){
    $('.header .lnb_pc .lnb_level02').stop().animate({
      height: 395
    });

    gnbLabText.css('color','#585858');
    lnbLevel01List.css('border-right', '1px solid #eeeeee');
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

    // gnbLabText.css('color','#ffffff');
    // lnbLevel01List.css('border-right', '1px solid #ffffff');
    // lnbLevel01Text.css('color', '#ffffff');
    $('.header .lnb_pc .lnb_level02').css('border-top', 'none');
    $('.header .gnb .language_sheet ul li a').css('color','#585858');

    $('.header_background').stop().animate({
      height: 0
    });

    // $('.header .lnb .logo_w').css('display', 'block');
    // $('.header .lnb .logo_b').css('display', 'none');
  });



  ////////////////////////// sub_con01_mo ////////////////////////////

  const subConTab = $('.sub_con_famous_people>ul>li');

  subConTab.click(function(){
    
    // let i = $(this).index();

    // if($(this).hasClass('on') === false) {
      $(this).children('.sub_label_box').siblings('.people_info').slideToggle(500).siblings('.sub_label_box').children('.sub_mo_arrow_lab').css('transform','rotate(180deg)');
      $(this).siblings('li').children('.sub_label_box').siblings('.people_info').slideUp(500).siblings('.sub_label_box').children('.sub_mo_arrow_lab').css('transform','rotate(180deg)');
    // }

  });


  //////////////////////// sub_con01_pc //////////////////////////////

  let subGalleryMainNum = $('.sub_view_people').find('.swiper-slide');
	let subGalleryThumbNum = $('.sub_thumbnail_frame').find('.swiper_slide');

  let subgalleryMain = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction : false,
    // }
    loopedSlides: subGalleryMainNum.length,

  });

  let subgalleryThumb = new Swiper('.mySwiper', {
    slidesPerView: 6,
    spaceBetween: 10,
    autoHeight:true,
    navigation: {
      nextEl: '.gallery_prev',	
      prevEl: '.gallery_next',	
    },
    centeredSlides: true,
    loop: true,
    loopedSlides: subGalleryThumbNum.length,
    loopAdditionalSlides: 10,
    slideToClickedSlide: true,
  });


  subgalleryMain.controller.control = subgalleryThumb;
  subgalleryThumb.controller.control = subgalleryMain;



  ////////////////////////// footer_tab //////////////////////////////////

  const footerTab = $('.footer .footer_tabs .foot_tab_box .foot_tab');

  footerTab.click(function(){
    $(this).siblings('ul').slideToggle(500);
    $(this).parent('.foot_tab_box').siblings('.foot_tab_box').children('ul').slideUp(500);
  });



});


document.addEventListener('DOMContentLoaded', () => {

  let comment = document.getElementById('comment_txt_box');
  
  comment.addEventListener('keyup', function() {
    let inputTxtVal = document.getElementById('comment_txt_box').value;
    let inputTxtLen = inputTxtVal.length;
    let inputTxtMax = 200;
    let textCount = document.querySelector('.text_count span');
    textCount.textContent = inputTxtLen;

    if (inputTxtLen > inputTxtMax) {
      alert(inputTxtMax + ' 이하로 입력하여 주십시오.');
      inputTxtVal = inputTxtVal.substring(0, inputTxtMax);
    }

  });



  /////////////////// comment_box ////////////////////////////////


  let replyList = [];
  let addReply = document.querySelector('.reply_button');



  addReply.addEventListener('click', addReList);

  function addReList() {

    let replyInput = document.querySelector('.comment_txt_area');
    if(replyInput.value != null) {
      replyList.unshift(replyInput.value);
      replyInput.value = '';
      replyInput.focus();
    }
    showReply();
  }


  function showReply() {
    let listRe = '<ul>';

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let sec = today.getSeconds();

    let replyDate = `${year}-${month}-${date} ${hour}:${minute}:${sec}`;

    let count = 0;

    let replyCount = document.querySelector('.reply_list_count');

    for (let i = 0; i<replyList.length; i++) {
      count++;
      let userNum = Math.random() * 1000;
      let userName = 'user_00' + parseInt(userNum);
      // const replyProfileImg = document.createElement('img');
      // const replyProfile = document.querySelector('.reply_profile');
      let ranNum = parseInt(Math.random() * 1);

      listRe += '<li>'+ '<div class="reply_title">' + '<div class="reply_profile"><img src="./images/reply_profile_0'+ranNum+'.png"/ ></div>' + '<div class="reply_user_info">' + '<p class="reply_user_name">'+ userName +'</p>'+ '<p class="reply_date">'+ replyDate +'</p>'+ '<p class="reply_txt">'+ replyList[i] +'</p>'+ '</div>' + '<span class="re_delete" id="'+ i +'">삭제</span>' + '</div>'+'</li>';
    }
    listRe += '</ul>';
    
    replyCount.textContent = count;

    document.querySelector('.reply_list').innerHTML = listRe;

    let deleteRe = document.querySelectorAll('.re_delete');

    for(let i = 0; i < deleteRe.length; i++) {
      deleteRe[i].addEventListener('click', deleteList);
      count--;
    }
  }

  function deleteList() {
    let delId = this.getAttribute('id');
    replyList.splice(delId, 1);
    showReply();
  }

});