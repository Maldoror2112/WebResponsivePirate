// JavaScript Document
$(document).ready(function(){
		
	$("#sidenews_list").on('click', 'a', function(e){
		e.preventDefault();
		var ajax_load = "<img src='..images/fancybox/fancybox_loading@2x.gif' alt='loading...' />"
		
		var href = $(this).attr('href');	
		
		$("#article2").html(ajax_load).load(href).fadeIn(5000);
					
		return false;
	});
	
	//variable declarations	
	 var processZindex, direction, inDeCrease, newZindex;
	 var $textDescriptions = $('#pic_descriptions p'); 
     var z = 0; //for setting the initial z-index's
	 var $textAll = (parseInt($('#pic_descriptions p').length)-1);
	 var textCount = $textAll;
	 var oldText = 0;
	 var inAnimation = false; //flag for testing if we are in a animation
	 $textDescriptions.eq($textAll).show();
	 
  
  $('#pictures img').each(function() { //set the initial z-index's
    z++; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
	});
  
	 
  function swapFirstLast(isFirst) {
	
    if(inAnimation) return false; //if already swapping pictures just return
    else inAnimation = true; //set the flag that we process a image
    
     //change for previous or next image
    
    if(isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1; writeDescription(true); } //If "next" button was pushed, set variables for "next" action
    else { processZindex = 1; direction = ''; newZindex = z; inDeCrease = -1; writeDescription(false); } //If "Previous" button was pushed, set variables for "previous" action
    
    $('#pictures img').each(function() { //process each image	  
      if($(this).css('z-index') == processZindex) { //if its the image we need to process
        $(this).animate({'top' : direction + $(this).height() + 'px' }, 'slow', function() { //animate the img above/under the gallery (assuming all pictures are equal height)
           $(this).css('z-index', newZindex).animate({ 'top' : '0' }, 'slow', function() { //animate the image back to its original position
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
  
  
 function writeDescription(order){
	 if(order){
	   $textDescriptions.hide().eq(textCount).show();
	}else{
	   $textDescriptions.hide().eq(textCount).show();
    }
  }
  
  $('#next').click(function(e) {
	  e.isDefaultPrevented();
	  if(textCount === 0){
		  textCount = $textAll;
		}else{
		  textCount -= 1;	
		}	  
	  	return swapFirstLast(true); //swap first image to last position	
  });
  
  $('#prev').click(function(e) {
	  e.isDefaultPrevented();
	  if(textCount === $textAll){
		  textCount = 0;
		}else{
		  textCount += 1;	
		}	
    return swapFirstLast(false); //swap last image to first position
  });


//Fancy box code!!!  
  $("a[rel=Art]").fancybox({
		'transitionIn' : 'elastic',
		'transitionOut':'elastic',
		'titlePosition':'over',
		'titleFormat': function(title, currentArray, currentIndex, currentOps)
		{
			return '<span id="fancy-box-title-over">Image ' + 
			(currentIndex +1) + '/' + currentArray.length + 
			(title.length ? '$nbsp;' + title: '') + '</span>';	
		},
		afterShow:function(){
			$(".fancybox-wrap").swiperight;
            $(".fancybox-wrap").swipeleft;
		},
		onUpdate:function(){
            $('#fancybox-thumbs ul').draggable({
                axis: "x"
            });
            var posXY = '';
            $('.fancybox-skin').draggable({
                axis: "x",
                drag: function(event,ui){
                    // get position
                    posXY = ui.position.left;

              // if drag distance bigger than +- 100px: cancel drag function..
                    if(posXY > 100){return false;}
                    if(posXY < -100){return false;}
                },
                stop: function(){

              // ... and get next or previous image
                    if(posXY > 95){$.fancybox.prev();}
                    if(posXY < -95){$.fancybox.next();}
                }
            });
        }
	});	

})