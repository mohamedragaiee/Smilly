/*global $, alert, console, mixer */
$(function () {
   
    'use strict';
    

   /* $('header h1').css('margin-top', ($(window).height() - 100 - $(this).height() / 2));*/

    
    $('header').height($(window).height());
    
    $('nav .bar i').click(function () {
       
        $('nav .nav ').toggleClass('visibel');
    });
});