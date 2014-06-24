// JavaScript Document
$(document).ready(function(){
	
	$('#article1-land').fadeOut(700);

	$("#sidenews_list").on('click', 'a', function(e){
		/*e.preventDefault();*/
		
		var href = $(this).attr('href');	
		
		$("#article1").hide(700).load(href + '#article1 p').fadeIn('1000');
		$("#article2").hide(700).load(href + '#article2 article').fadeIn('1000');
		
		return false;
	})	
	

})