(function ($) {
	"use strict";

    jQuery(document).ready(function($){        
        $(".slider-area").owlCarousel({
        	items:1,
        	nav:false,
        	dots:true,
        	loop:true,
        	autoplay:false
        }); 

        $(".logo-carousel").owlCarousel({
            items:5,
            margin:30,
            nav:false,
            dots:true,
            loop:true,
            autoplay:false
        });     


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	