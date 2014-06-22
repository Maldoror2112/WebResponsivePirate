// JavaScript Document
window.onload = initLinks;

function initLinks(){
	
		
	$("#nav a").click(function(){
		/*e.defaultPrevented();*/		
	    var href = $(this).attr('href');
		var ajax_load = "<img src='images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"	
		
		$("#pageAllWrapper").html(ajax_load).fadeIn('slow').load(href);
		
		return false;	
	})
	
	
	/*function move_div(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		
		objWidth = $('#article1-land').width();
		objHeight = $('#article1-land').height();
		
		$('#article1-land').css('top' , (windowHeight/2) -(objHeight/2)).css('left' , (windowWidth/2) - (objWidth/2));		
	}
	
	move_div();
	
	$(window).resize(function(){
		move_div();
	});*/
}

