// JavaScript Document
$(window).ready(function(){
	
	$('#article1-land').remove(700);
	
	$('#sidenews_list').on('click','a', function(){
		
		var href = $(this).attr('href');
		
		$('#article1').fadeOut(700).load(href).fadeIn(700);
		$('#article2').fadeOut(500);
		
	});
	
});