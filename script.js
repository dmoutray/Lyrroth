
jQuery(document).ready(function() {

var navOffset = jQuery ("#menu").offset().top;

jQuery("#menu").wrap('<div class="nav-placeholder"></div>');
jQuery(".nav-placeholder").height(jQuery("#menu").outerHeight());

jQuery(window).scroll(function() {
	
	var scrollPos = jQuery(window).scrollTop();
	
	if (scrollPos >= navOffset){
		jQuery("#menu").addClass("fixed");
		
	}
	
	else {
		jQuery("#menu").removeClass("fixed");
		
	}
	
	});
	


});