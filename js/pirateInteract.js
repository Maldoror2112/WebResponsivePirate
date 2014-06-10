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
}

