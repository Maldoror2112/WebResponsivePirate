// JavaScript Document
window.onload = initLinks;

function initLinks(){
<<<<<<< HEAD

$(function(){
					
	//$('#2d_art').click(function(){	
//		$('#a1InsideText').append('<p><img class="twoDArt" src="images/waxseal.png"/><img class="twoDArt" src="images/waxseal.png"/><img class="twoDArt" src="images/waxseal.png"/>Click on images below to see larger versions</p>');	
//	});

	$('#2d_art').on('click', function(){	
<<<<<<< HEAD
			var $htmlAdd = $('<p><img id="twoDArt" src="images/waxseal.png"/><img id="twoDArt" src="images/waxseal.png"/><img id="twoDArt" src="images/waxseal.png"/>Click on images below to see larger versions</p>');
=======
			var $htmlAdd = $('<p id="twoDDescription"><img id="twoDArt" src="images/gallery/ChooChooExplain1_sm.png" />Click on images below to see larger versions</p>');
<<<<<<< HEAD
>>>>>>> c572e27... Main big picture enalarged
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
<<<<<<< HEAD
>>>>>>> 3d4285d... JS code for 2d photoshop/illustrator buttons
=======
			
			$('#drag_pic').bind('draggable', dragEnabled);
>>>>>>> c572e27... Main big picture enalarged
=======
			
			$('#gallery2D').fadeIn("5000");	
			
			
>>>>>>> e49c08b... Media Queries and web responsive layout tightened up for the portfolio page. Bio entries added to also.
	});
=======
	var listCount;
    var currList = 0;
    var oldList = 0;
>>>>>>> 6a4cca7... Redid News page in Jquery. Now easier to read and less code.
	
$(function(){
	
<<<<<<< HEAD
<<<<<<< HEAD
});

<<<<<<< HEAD
=======
	function dragEnabled(){
		alert("Dragging enabled!");	
	}
=======
	$('#2d_art').on('click', function(){
								
=======
	$('#2d_art').on('click', function(){								
>>>>>>> 59f8a70... Committing all web responsive fixes. Looks good on everything but Safari right now. Got the z-index to work right on Firefox and Chrome.
			$('#gallery2D').fadeIn("5000");				
	});		
>>>>>>> 6a4cca7... Redid News page in Jquery. Now easier to read and less code.

	$("a[rel=2dArt]").fancybox({
		'transitionIn' : 'elastic',
		'transitionOut':'elastic',
		'titlePosition':'over',
		'titleFormat': function(title, currentArray, currentIndex, currentOps)
		{
			return '<span id="fancy-box-title-over">Image ' + 
			(currentIndex +1) + '/' + currentArray.length + 
			(title.length ? '$nbsp;' + title: '') + '</span>';	
		}
	});	

	 var z = 0; //for setting the initial z-index's
     var inAnimation = false; //flag for testing if we are in a animation
	 listCount = $('p.pic_descr').size();
	 $('p.pic_descr:eq('+currList+')').show();

	 //var firstDescr;
	// var lastDescr = picDescrArray.length;
	
	  
  $('#pictures img').each(function() { //set the initial z-index's
    z++; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
	// alert('array made');
});
  
 
  function swapFirstLast(isFirst) {
    if(inAnimation) return false; //if already swapping pictures just return
    else inAnimation = true; //set the flag that we process a image
   	
    var processZindex, direction, newZindex, inDeCrease, firstDescr; //change for previous or next image	 
    
    if(isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1;
		currList = (oldList-1) % listCount;
		$('p.pic_descr:eq('+oldList+')').hide(500);
		$('p.pic_descr:eq('+currList+')').show(500).css('display','inline');
		
		oldList = currList;	
	} //set variables for "next" action
    else { processZindex = 1; direction = '+'; newZindex = z; inDeCrease = -1; 
		currList = (oldList+1) % listCount;
		$('p.pic_descr:eq('+oldList+')').hide(500);
		$('p.pic_descr:eq('+currList+')').show(500).css('display','inline');
		oldList = currList;	
	} //set variables for "previous" action 
	
    
    $('#pictures img').each(function() { //process each image
      if($(this).css('z-index') == processZindex) { //if its the image we need to process
        $(this).animate({ 'top' : direction + $(this).height() + 'px' }, 'slow', function() { //animate the img above/under the gallery (assuming all pictures are equal height)
          $(this).css('z-index', newZindex) //set new z-index
            .animate({ 'top' : '0' }, 'slow', function() { //animate the image back to its original position
              inAnimation = false; //reset the flag			  
            });
        });
      } else { //not the image we need to process, only in/de-crease z-index
        $(this).animate({ 'top' : '0' }, 'slow', function() { //make sure to wait swapping the z-index when image is above/under the gallery
          $(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease); //in/de-crease the z-index by one
        });
      }
    });
    
    return false; //don't follow the clicked link
  }
    
  $('#next a').click(function() {
    return swapFirstLast(true); //swap first image to last position
	
  });
  
  $('#prev a').click(function() {
    return swapFirstLast(false); //swap last image to first position
  });
>>>>>>> c572e27... Main big picture enalarged

});

}