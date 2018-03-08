(function ($) {
	"use strict";

    jQuery(document).ready(function($){        
         $('.projects-title li').on( 'click', function() {
          $('.projects-title li').removeClass("active");
          $(this).addClass("active");
		  var selector = $(this).attr('data-filter');
		  $('.project-lists').isotope({ filter: selector });
		});    


    });


    jQuery(window).load(function(){
    	jQuery(".project-lists").isotope();
        
    });


}(jQuery));	