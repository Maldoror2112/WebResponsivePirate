// JavaScript Document
$(document).ready(function(){
	
	$('#article1-land').remove();
	
 

	$("#sidenews_list").on('click', 'a', function(e){
		/*e.preventDefault();*/
		var ajax_load = "<img src='images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"
		var href = $(this).attr('href');	
		
		$("#article1").fadeOut('1000').html(ajax_load).load(href + '#article1 p').fadeIn('1000', function(){
			if($(window).width() <= 735){
			  $("#sidenews").fadeOut(700).remove();
			  $("#article1").css({"position": "relative", "top": "-350px"});
			  $("#article2").css({"position": "relative", "top": "-350px"});
			  $("#backtotop").css({"position": "relative", "top": "-20px"});
			  $("#footerbottom").css({"position": "relative", "top": "-360px"});
			 /* $("#article1").addClass("news-article");*/
		  }
		   //using the back to top button at the bottom of the page.
          $('.top').click(function(){
	        $('html, body').animate({scrollTop: 0}, '1000');
          });	 		
		
		});
		
		$("#article2").fadeOut('1000').html(ajax_load).load(href + '#article2 #news_section article').css('background-image', 'none').fadeIn('1000');
		
		
		/*$("#article2").fadeOut('1000').html(ajax_load).load(href + '#section p').fadeIn('1000');*/
		/*$("#article2").load(href + '#section').append(href + "#section");*/
		return false;
	})	
	

})