(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $('.homepage-slides').owlCarousel({
        	items: 1,        	
        	autoplay: false,
        	dots: true,
        	loop: true,
        	nav:true,
        	navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            animateOut: "fadeOut"
        });       


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	