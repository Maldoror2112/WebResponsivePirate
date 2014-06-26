// JavaScript Document
$(document).ready(function(){
	var windowWidth = $(window).width();
	var ajax_load = "<img src='images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"
	
	$('#article1-land').remove(700);
	
	$("#sidenews_list").on('click', 'a', function(e){
		e.preventDefault();
		
		var href = $(this).attr('href');	
		
		$("#article2").hide(700).html(ajax_load).load(href).fadeIn('1000', function(){
			/*if(windowWidth <= 360){
		     $("#article1").fadeOut(700);
		   }	*/
		   $('#article2').addClass('.article2');	
		});
					
		return false;
	})		
	
})