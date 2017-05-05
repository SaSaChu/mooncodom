/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {

  $(".n_picbox, .pop_pic, .pic_full").imgLiquid ();
  
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

});