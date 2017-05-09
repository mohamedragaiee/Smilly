/*global $, alert, console, mixer */
$(function () {
   
    'use strict';
    

    $('header .hdr').css('margin-top', ($(window).height() - 484));
    
    $(window).width(function () {
        
        if ($(window).width() < 768) {
            
            $('header .hdr').css('margin-top', ($(window).height() - 400));
        }
        
    });
    
    $('header').height($(window).height());
    
    $('nav .bar i').click(function () {
       
        $('nav .nav ').toggleClass('visibel');
    });
});