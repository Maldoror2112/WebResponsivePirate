// JavaScript Document
$(document).ready(function(){
	
	$('#article1-land').fadeOut(700);

	$("#sidenews_list").on('click', 'a', function(e){
		/*e.preventDefault();*/
		var ajax_load = "<img src='images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"
		var href = $(this).attr('href');	
		
		$("#article1").fadeOut('1000').html(ajax_load).load(href + '#article1 p').fadeIn('1000');
		$("#article2").fadeOut('1000').html(ajax_load).load(href + '#article2 #news_section article').fadeIn('1000');
		/*$("#article2").fadeOut('1000').html(ajax_load).load(href + '#section p').fadeIn('1000');*/
		/*$("#article2").load(href + '#section').append(href + "#section");*/
		
		return false;
	})	
	

})