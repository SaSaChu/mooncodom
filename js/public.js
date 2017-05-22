/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  $('#news_box').append ($('.hnav').clone ());
  
  $('body').append ($('<div />').attr ('id', 'menu_mobile').append ($('<label />').addClass ('icon-cross').attr ('for', 'menu_ckeckbox')).append (
    $('#menu .nav_box *').map (function () {
      return $('<div />').addClass ($(this).hasClass('hnav') ? 'a' : null).append ($(this).clone ());
    }).toArray ())).append ($('<label />').attr ('for', 'menu_ckeckbox'));

  $(".n_picbox, .pic_full, .cent_banner, .ad_pic, .car_banner, .newss .img").imgLiquid ();

  $('.pop_pic, .p_pic, .epl_pic, .epr_pic, tbody .img').imgLiquid ({
    fill: false
  });

  $('.group>div').each (function () {
    $(this).addClass ('n' + $(this).find ('>a').length);
  });
  $('.group>span').click (function () {
    $(this).toggleClass ('show');
  });
  setTimeout (function () {
    $('.group>div').addClass ('ani');
  }, 500);
  
  $('.cate_title.mobile').click (function () {
    $(this).toggleClass ('show');
  });
  if ($('.ad_boxs').length && $('#aboutboxs').length) {
    $('.ad_boxs').clone (true).attr ('class', 'ad_boxs2').insertBefore ($('#aboutboxs'));
  }

  $('.banner').each (function () {

    $(this).find ('.left').click (function() {
      // clone是複製前面這組class的意思
      var a = $(this).find ('.box .item').first ().clone();
      $(this).find ('.box .item').first ().remove ();
       // a.appendTo('#box');
       $(this).find ('.box').append(a);
       // append是“加入到＿＿前面”
    }.bind ($(this)));

    $(this).find ('.right').click (function() {
      var a = $(this).find ('.box .item').last ().clone();
      $(this).find ('.box .item').last ().remove ();
      // a.prependTo('#box');
      $(this).find ('.box').prepend(a);
      // prepend是“加入到＿＿後面”
    }.bind ($(this))).click ();


    if ($(this).data ('time')) {
      setInterval (function () {
        $(this).find ('.left').click ();
      }.bind ($(this)), parseInt ($(this).data ('time'), 10) * 1000);
    }

    setTimeout (function () {
      $(this).addClass ('tran');
    }.bind ($(this)), 300);

  });


  var menu_top = $('#menu').offset ().top;
  $(window).scroll (function () {
    
    if ($(window).scrollTop () > menu_top) {
      $('#menu').addClass ('fix');
    } else {
      $('#menu').removeClass ('fix');
    }
  });

  $('.epr_pic').click (function () {
    $('.epl_pic').find ('img').attr ('src', $(this).find ('img').attr ('src'));
    $('.epl_pic').imgLiquid ({
      fill: false
    });
  });

});