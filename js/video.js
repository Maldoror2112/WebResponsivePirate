// JavaScript Document
$(document).ready(function(){
	var ajax_load = "<img src='..images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"
	
	$("#sidenews_list").on('click', 'a', function(e){
		e.preventDefault();
		
		var href = $(this).attr('href');	
		
		$("#article2").html(ajax_load).load(href).fadeIn(5000);
					
		return false;
	});
		
})