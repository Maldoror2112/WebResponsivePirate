// JavaScript Document
window.onload = initLinks;

function initLinks(){

$(function(){
					
	//$('#2d_art').click(function(){	
//		$('#a1InsideText').append('<p><img class="twoDArt" src="images/waxseal.png"/><img class="twoDArt" src="images/waxseal.png"/><img class="twoDArt" src="images/waxseal.png"/>Click on images below to see larger versions</p>');	
//	});

	$('#2d_art').on('click', function(){	
			var $htmlAdd = $('<p><img id="twoDArt" src="images/waxseal.png"/><img id="twoDArt" src="images/waxseal.png"/><img id="twoDArt" src="images/waxseal.png"/>Click on images below to see larger versions</p>');
			var $articleElement = $('#a1InsideText');
			if($articleElement === $htmlAdd){
				$('#2d_art').off();
			}else{
				$('#a1InsideText').html($htmlAdd);		
<<<<<<< HEAD
			}		
=======
			}
			$('#gallery').fadeIn("5000");	
>>>>>>> 3d4285d... JS code for 2d photoshop/illustrator buttons
	});
	
	$('#a1InsideText').on('click', '#twoDArt', function(){
		alert('Yes, I am clicking on an image!!!');
	});	
	
});


}